import debug from 'debug'

import type { Ctx } from '~/types'
import type { User } from '~/types/gql'

import { userService } from '~/services/user'
import { AuthPasswordNotMatchMmmcError, UserAlreadyExistsMmmcError, UserNotExistsMmmcError } from '~/utils/error'
import { comparePassword, hashPassword } from '~/utils/string'

import type { LoginInput } from './dto/login-input.dto'
import type { RegisterInput } from './dto/register-input.dto'

export async function register(ctx: Ctx, input: RegisterInput): Promise<User> {
  const existingUser = await userService.getUserByEmail(ctx.db, input.email)
  if (existingUser)
    throw new UserAlreadyExistsMmmcError()

  // create new user
  const user = await userService.createUser(ctx.db, {
    ...input,
    password: await hashPassword(input.password),
  })

  const result = { ...user, id: `${user.id}` }

  debug('mmmc:ctrl:auth:register')('user created', result)

  return result
}

export async function login(ctx: Ctx, input: LoginInput): Promise<User> {
  const existingUser = await userService.getUserByEmail(ctx.db, input.email)
  if (!existingUser)
    throw new UserNotExistsMmmcError()

  // verify password
  const passwordMatch = await comparePassword(input.password, existingUser.password)
  if (!passwordMatch)
    throw new AuthPasswordNotMatchMmmcError()

  const result = { ...existingUser, id: `${existingUser.id}` }

  debug('mmmc:ctrl:auth:login')('user logged in', result)

  return result
}
