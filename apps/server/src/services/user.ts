import { eq } from 'drizzle-orm'

import type { DB } from '@/utils/db'
import type { CreateUserInput, UserModel } from '@/models/user'
import type { Optional } from '@/types/utils'
import { users } from '@/utils/schema'
import { UserRole } from '@/types'

async function getUserByEmail(db: DB, email: string): Promise<Optional<UserModel>> {
  const rows = await db.select().from(users).where(eq(users.email, email))
  const row = rows[0]
  if (!row)
    return null
  return {
    ...row,
    role: row.role === 'admin' ? UserRole.Admin : UserRole.User,
  }
}

async function createUser(_db: DB, _input: CreateUserInput) {
  // TODO: create history and favorite playlist
}

export const userService = {
  getUserByEmail,
  createUser,
}
