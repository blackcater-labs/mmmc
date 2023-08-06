import { ExecutionContext, createParamDecorator } from '@nestjs/common'
import { UserDto } from '../user/user.dto'

export const User = createParamDecorator(
  (_: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()
    return request.user as UserDto
  },
)

export const UserId = createParamDecorator(
  (_: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()
    return request.user.userId
  },
)
