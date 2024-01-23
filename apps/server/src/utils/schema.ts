// Drizzle Schema for Sqlite Database

import { randomUUID } from 'node:crypto'
import { sqliteTable, text, unique } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable(
  'users',
  {
    id: text('id').primaryKey().notNull().$defaultFn(() => randomUUID()),
    email: text('email'),
    password: text('password'),
    role: text('role', { enum: ['admin', 'user'] }).default('user'),
  },
  t => ({
    uniqIdxEmail: unique('uniq_idx_email').on(t.id),
  }),
)
