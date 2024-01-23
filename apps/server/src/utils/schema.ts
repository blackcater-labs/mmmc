// Drizzle Schema for Sqlite Database

import { randomUUID } from 'node:crypto'
import { index, sqliteTable, text, unique } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable(
  'users',
  {
    id: text('id').primaryKey().notNull().$defaultFn(() => randomUUID()),
    email: text('email').notNull(),
    password: text('password').notNull(),
    role: text('role', { enum: ['admin', 'user'] }).default('user'),
  },
  t => ({
    uniqIdxEmail: unique('uniq_idx_email').on(t.id),
  }),
)

export const libraries = sqliteTable(
  'libraries',
  {
    id: text('id').primaryKey().notNull().$defaultFn(() => randomUUID()),
    userId: text('user_id').notNull().references(() => users.id),
    name: text('name').notNull(),
    path: text('path').notNull(),
  },
  t => ({
    uniqIdxUserName: unique('uniq_idx_user_name').on(t.userId, t.name),
    idxUserId: index('idx_user_id').on(t.userId),
  }),
)

export const items = sqliteTable(
  'items',
  {
    id: text('id').primaryKey().notNull().$defaultFn(() => randomUUID()),
    libraryId: text('library_id').notNull().references(() => libraries.id),
  },
  t => ({
    idxLibraryId: index('idx_library_id').on(t.libraryId),
  }),
)

export const chapters = sqliteTable(
  'chapters',
  {
    id: text('id').primaryKey().notNull().$defaultFn(() => randomUUID()),
    itemId: text('item_id').notNull().references(() => items.id),
    title: text('title').notNull(),
  },
  t => ({
    idxItemId: index('idx_item_id').on(t.itemId),
  }),
)

export const metadatas = sqliteTable(
  'metadatas',
  {
    id: text('id').primaryKey().notNull().$defaultFn(() => randomUUID()),
    libraryId: text('library_id').notNull().references(() => libraries.id),
    itemId: text('item_id').notNull().references(() => items.id),
  },
  t => ({
    idxLibraryId: index('idx_library_id').on(t.libraryId),
    idxItemId: index('idx_item_id').on(t.itemId),
  }),
)

export const settings = sqliteTable(
  'settings',
  {
    id: text('id').primaryKey().notNull().$defaultFn(() => randomUUID()),
  },
)
