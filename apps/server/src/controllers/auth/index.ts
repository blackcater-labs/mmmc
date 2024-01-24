import type { RegisterInput } from './dto/register-input.dto'
import type { LoginInput } from './dto/login-input.dto'
import type { Ctx, User } from '@/types'
import { userService } from '@/services/user'
import { InternalServerMmmcError, UserAlreadyExistsMmmcError } from '@/utils/error'

export async function register(ctx: Ctx, input: RegisterInput): Promise<User> {
  const user = await userService.getUserByEmail(ctx.db, input.email)
  if (user)
    throw new UserAlreadyExistsMmmcError()
  // await userService.createUser(ctx.db, input)
}

export async function login(_ctx: Ctx, _input: LoginInput): Promise<User> {
  throw new InternalServerMmmcError('Not implemented')
}
