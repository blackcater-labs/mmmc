import type { LoginInput, RegisterInput } from '@/models/auth'
import type { Ctx } from '@/types'
import { userService } from '@/services/user'
import { InternalServerMmmcError, UserAlreadyExistsMmmcError } from '@/utils/error'

export async function register(ctx: Ctx, input: RegisterInput) {
  const user = await userService.getUserByEmail(ctx.db, input.email)
  if (user)
    throw new UserAlreadyExistsMmmcError()
  // await userService.createUser(ctx.db, input)
}

export async function login(_ctx: Ctx, _input: LoginInput) {
  throw new InternalServerMmmcError('Not implemented')
}
