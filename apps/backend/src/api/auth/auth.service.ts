import { createHash } from 'node:crypto'
import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'
import { UserService } from '../user/user.service'
import { RegisterDto } from './auth.dto'
import { PrismaService } from '@/service/prisma.service'
import { BizBadRequestException, BizUnauthorizedException } from '@/util/error'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {}

  // Register a new user
  async register(registerDto: RegisterDto) {
    const { passwordConfirm, ...data } = registerDto

    // Check if the password is consistent
    if (data.password !== passwordConfirm)
      throw new BizBadRequestException(1000010)

    // Check if the username already exists
    if (await this.userService.existsByUsername(data.username))
      throw new BizBadRequestException(1000020)

    data.password = this.hashPassword(data.password)

    return this.userService.create(data)
  }

  // Hash the password
  hashPassword(rawPassword: string) {
    const hash = createHash('sha256')

    hash.update(this.configService.get('jwt.passwordSalt'))
    hash.update(rawPassword)

    return hash.digest('hex')
  }

  // Check if the password is correct
  checkPassword(rawPassword: string, hashPassword: string = '') {
    return hashPassword === this.hashPassword(rawPassword)
  }

  // Login with username and password
  async login(username: string, password: string) {
    const user = await this.userService.findOneByUsername(username)

    if (!this.checkPassword(password, user?.password))
      throw new BizUnauthorizedException(1000001)

    const payload = { userId: user.userId }

    return {
      currentUser: user,
      accessToken: await this.jwtService.signAsync(payload),
    }
  }

  async logout() {}
}
