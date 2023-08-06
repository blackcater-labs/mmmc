import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { ConfigService } from '@nestjs/config'
import { UserService } from '../user/user.service'
import { BizUnauthorizedException } from '@/util/error'

export interface Payload {
  iat: number
  exp: number
}

export interface JwtPayload extends Payload {
  userId: string
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService, private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('jwt.secret'),
    })
  }

  async validate(payload: JwtPayload) {
    if (payload.exp >= (Date.now() / 1000))
      return await this.userService.findOneByUserId(payload.userId)
    throw new BizUnauthorizedException(1000030)
  }
}
