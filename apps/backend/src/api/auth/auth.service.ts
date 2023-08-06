import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'
import * as bcrypt from 'bcrypt'
import { UserService } from '../user/user.service'
import { PrismaService } from '@/service/prisma.service'
import { BizUnauthorizedException } from '@/util/error'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {}

  async validateUser(username: string, password: string) {}

  async checkPassword(rawPassword: string, password: string = '') {
    return password === await bcrypt.hash(rawPassword, this.configService.get('jwt.passwordSalt'))
  }

  async login(username: string, password: string) {
    const user = await this.userService.findOneByUsername(username)

    if (!await this.checkPassword(password, user?.password))
      throw new BizUnauthorizedException(1000001)

    const payload = { userId: user.userId }

    return {
      currentUser: {
        userId: user.userId,
        username: user.username,
        nickname: user.nickname,
        email: user.email,
        avatar: user.avatar,
        role: user.role,
        bio: user.bio,
      },
      accessToken: await this.jwtService.signAsync(payload),
    }
  }

  async logout() {}
}
