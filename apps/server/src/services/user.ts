import debug from 'debug'
import { eq } from 'drizzle-orm'

import type { CreateUserInput, UserModel } from '~/models/user'
import type { Optional } from '~/types/utils'
import type { DB } from '~/utils/db'

import { convertToUserRole } from '~/models/user'
import { users } from '~/utils/schema'

async function getUserById(db: DB, id: number | string): Promise<Optional<UserModel>> {
  const rows = await db.select().from(users).where(eq(users.id, Number(id)))
  const row = rows[0]

  debug('mmmc:svc:user:getUserById')('rows', rows)

  if (!row)
    return null

  return {
    ...row,
    role: convertToUserRole(row.role),
  }
}

async function getUserByEmail(db: DB, email: string): Promise<Optional<UserModel>> {
  const rows = await db.select().from(users).where(eq(users.email, email))
  const row = rows[0]

  debug('mmmc:svc:user:getUserByEmail')('rows', rows)

  if (!row)
    return null

  return {
    ...row,
    role: convertToUserRole(row.role),
  }
}

async function createUser(db: DB, input: CreateUserInput): Promise<UserModel> {
  const rows = await db.insert(users).values(input).returning()
  const row = rows[0]

  debug('mmmc:svc:user:createUser')('rows', rows)

  return {
    ...row,
    role: convertToUserRole(row.role),
  }
}

export const userService = {
  getUserById,
  getUserByEmail,
  createUser,
}
