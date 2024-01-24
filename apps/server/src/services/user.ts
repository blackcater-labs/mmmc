import type { DB } from '@/utils/db'

export async function getUserByEmail(db: DB, email: string) {
  return await db.query.users.findFirst({
    where: (users, { eq }) => (eq(users.email, email)),
  })
}
