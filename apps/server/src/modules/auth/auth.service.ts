import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User } from '@prisma/client'
import { I18nContext, I18nService } from 'nestjs-i18n'
import bcrypt from 'bcrypt'

import { PrismaService } from '../prisma/prisma.service'
import { UserService } from '../user/user.service'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private prismaService: PrismaService,
    private i18nService: I18nService,
  ) {}

  async signIn(username: string, password: string) {
    const user = await this.userService.findOneByUsername(username)
    const hashedPassword = await bcrypt.hash(password, 10)

    if (user?.password !== hashedPassword)
      throw new UnauthorizedException()

    return {
      access_token: await this._generateToken(user),
      user,
    }
  }

  async _generateToken(user: User): Promise<string> {
    const payload = { sub: user.id, username: user.username, role: user.role }

    return await this.jwtService.signAsync(payload)
  }

  async signUp(username: string, password: string, rest?: Partial<User>) {
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await this.userService.findOneByUsername(username)

    if (user)
      throw new BadRequestException(this.i18nService.t('auth.user-exist', { lang: I18nContext.current().lang }))

    const newUser = await this.prismaService.user.create({
      data: {
        username,
        password: hashedPassword,
        ...(rest || {}),
      },
    })

    return {
      access_token: await this._generateToken(newUser),
      user: newUser,
    }
  }
}
