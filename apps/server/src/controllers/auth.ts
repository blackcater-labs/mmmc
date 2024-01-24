import type { LoginInput, RegisterInput } from '@/models/auth'
import type { Ctx } from '@/types'
import { InternalServerMmmcError } from '@/utils/error'

export async function register(ctx: Ctx, input: RegisterInput) {
  throw new InternalServerMmmcError('Not implemented')
}

export async function login(ctx: Ctx, input: LoginInput) {
  throw new InternalServerMmmcError('Not implemented')
}
