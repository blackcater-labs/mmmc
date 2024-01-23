// Drizzle Schema for Sqlite Database

import { foreignKey, index, integer, sqliteTable, text, unique } from 'drizzle-orm/sqlite-core'
import { sql } from 'drizzle-orm'

import type { Grade } from '@/types'

export const users = sqliteTable(
  'users',
  {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    email: text('email').notNull(),
    password: text('password').notNull(),
    role: text('role', { enum: ['admin', 'user'] }).default('user'),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`CURRENT_TIMESTAMP`),
    updatedAt: integer('updated_at', { mode: 'timestamp' }),
  },
  t => ({
    uniqIdxEmail: unique('users_uniq_idx_email').on(t.id),
  }),
)

export const libraries = sqliteTable(
  'libraries',
  {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    userId: integer('id', { mode: 'number' }).notNull().references(() => users.id),
    name: text('name').notNull(),
    path: text('path').notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`CURRENT_TIMESTAMP`),
    updatedAt: integer('updated_at', { mode: 'timestamp' }),
  },
  t => ({
    uniqIdxUserName: unique('libraries_uniq_idx_user_name').on(t.userId, t.name),
    idxUserId: index('libraries_idx_user_id').on(t.userId),
  }),
)

export const items = sqliteTable(
  'items',
  {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    libraryId: integer('id', { mode: 'number' }).notNull().references(() => libraries.id),
    title: text('title').notNull(),
    description: text('description'),
    cover: text('cover'),
    isbn: text('isbn'), // book
    pageCount: integer('page_count'), // book
    wordCount: integer('word_count'), // novel
    grade: text('grade', { mode: 'json' }).$type<Grade>(),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`CURRENT_TIMESTAMP`),
    updatedAt: integer('updated_at', { mode: 'timestamp' }),
    publishedAt: integer('published_at', { mode: 'timestamp' }),
  },
  t => ({
    idxLibraryId: index('items_idx_library_id').on(t.libraryId),
  }),
)

export const chapters = sqliteTable(
  'chapters',
  {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    itemId: integer('id', { mode: 'number' }).notNull().references(() => items.id),
    title: text('title').notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`CURRENT_TIMESTAMP`),
    updatedAt: integer('updated_at', { mode: 'timestamp' }),
  },
  t => ({
    idxItemId: index('chapters_idx_item_id').on(t.itemId),
  }),
)

export const tags = sqliteTable(
  'tags',
  {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    parentId: integer('id', { mode: 'number' }),
    libraryId: integer('id', { mode: 'number' }).notNull().references(() => libraries.id),
    name: text('name').notNull(),
    type: integer('type').notNull(),
    thumb: text('avatar'),
    description: text('description'),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`CURRENT_TIMESTAMP`),
    updatedAt: integer('updated_at', { mode: 'timestamp' }),
  },
  t => ({
    parentRef: foreignKey({
      name: 'tags_fk_parent_id',
      columns: [t.parentId],
      foreignColumns: [t.id],
    }),
    idxLibraryType: index('tags_idx_library_type').on(t.libraryId, t.type),
    idxType: index('tags_idx_type').on(t.type),
  }),
)

export const taggins = sqliteTable(
  'taggings',
  {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    itemId: integer('id', { mode: 'number' }).notNull().references(() => items.id),
    tagId: integer('id', { mode: 'number' }).notNull().references(() => tags.id),
    index: integer('index').notNull().default(0),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`CURRENT_TIMESTAMP`),
    updatedAt: integer('updated_at', { mode: 'timestamp' }),
  },
  t => ({
    uniqIdxItemTag: unique('taggings_uniq_idx_item_tag').on(t.itemId, t.tagId),
    idxItemId: index('taggings_idx_item_id').on(t.itemId),
    idxTagId: index('taggings_idx_tag_id').on(t.tagId),
  }),
)

export const playlists = sqliteTable(
  'playlists',
  {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  },
)

export const settings = sqliteTable(
  'settings',
  {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    userId: integer('id', { mode: 'number' }).notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`CURRENT_TIMESTAMP`),
    updatedAt: integer('updated_at', { mode: 'timestamp' }),
  },
  t => ({
    uniqUserId: unique('settings_uniq_user_id').on(t.userId),
  }),
)
