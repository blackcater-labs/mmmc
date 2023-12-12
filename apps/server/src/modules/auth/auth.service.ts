import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'
import { User } from '@prisma/client'

import { PrismaService } from '../prisma/prisma.service'
import { UserService } from '../user/user.service'
import { md5Hash } from '@/utils'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
    private prismaService: PrismaService,
  ) {}

  async signIn(username: string, password: string) {
    const user = await this.userService.findOneByUsername(username)
    const salt = this.configService.get<string>('SALT_PWD')
    const hashedPassword = md5Hash(`${salt}${password}`)

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
    const salt = this.configService.get<string>('SALT_PWD')
    const hashedPassword = md5Hash(`${salt}${password}`)
    const user = await this.userService.findOneByUsername(username)

    if (user)
      throw new BadRequestException('User already exists')

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
