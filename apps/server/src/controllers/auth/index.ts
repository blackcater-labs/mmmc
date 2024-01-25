import debug from 'debug'

import type { RegisterInput } from './dto/register-input.dto'
import type { LoginInput } from './dto/login-input.dto'
import type { Ctx, User } from '@/types'
import { userService } from '@/services/user'
import { InternalServerMmmcError, UserAlreadyExistsMmmcError } from '@/utils/error'
import { hashPassword } from '@/utils/string'

export async function register(ctx: Ctx, input: RegisterInput): Promise<User> {
  const existingUser = await userService.getUserByEmail(ctx.db, input.email)
  if (existingUser)
    throw new UserAlreadyExistsMmmcError()

  // create new user
  const user = await userService.createUser(ctx.db, {
    ...input,
    password: await hashPassword(input.password),
  })

  debug('mmmc:ctrl:auth:register')('user created', user)

  return user
}

export async function login(_ctx: Ctx, _input: LoginInput): Promise<User> {
  throw new InternalServerMmmcError('Not implemented')
}
