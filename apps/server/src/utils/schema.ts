// Drizzle Schema for Sqlite Database

import { sql } from 'drizzle-orm'
import { foreignKey, index, integer, sqliteTable, text, unique } from 'drizzle-orm/sqlite-core'

const MAX_VAR_SIZE = 255

export const users = sqliteTable(
  'users',
  {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name', { length: MAX_VAR_SIZE }).notNull(),
    email: text('email', { length: MAX_VAR_SIZE }).notNull(),
    password: text('password', { length: MAX_VAR_SIZE }).notNull(),
    role: text('role', { enum: ['Admin', 'User'], length: MAX_VAR_SIZE }).notNull().default('User'),
    avatar: text('avatar', { length: MAX_VAR_SIZE }),
    historyPlaylistId: integer('history_playlist_id'), // global history playlist, lazy create
    favoritePlaylistId: integer('favorite_playlist_id'), // global favorite playlist, lazy create
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`(strftime('%s', 'now'))`),
    updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull().default(sql`(strftime('%s', 'now'))`),
  },
  t => ({
    uniqIdxEmail: unique('users_uniq_idx_email').on(t.email),
  }),
)

export const libraries = sqliteTable(
  'libraries',
  {
    id: integer('id').primaryKey({ autoIncrement: true }),
    userId: integer('user_id').notNull().references(() => users.id),
    name: text('name', { length: MAX_VAR_SIZE }).notNull(),
    path: text('path', { length: MAX_VAR_SIZE }).notNull(),
    historyPlaylistId: integer('history_playlist_id'), // library history playlist, lazy create
    favoritePlaylistId: integer('favorite_playlist_id'), // library favorite playlist, lazy create
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`(strftime('%s', 'now'))`),
    updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull().default(sql`(strftime('%s', 'now'))`),
  },
  t => ({
    uniqIdxUserName: unique('libraries_uniq_idx_user_name').on(t.userId, t.name),
    idxUser: index('libraries_idx_user').on(t.userId),
  }),
)

export const items = sqliteTable(
  'items',
  {
    id: integer('id').primaryKey({ autoIncrement: true }),
    libraryId: integer('library_id').notNull().references(() => libraries.id),
    title: text('title', { length: MAX_VAR_SIZE }).notNull(),
    description: text('description'),
    cover: text('cover', { length: MAX_VAR_SIZE }),
    isbn: text('isbn', { length: MAX_VAR_SIZE }), // book
    pageCount: integer('page_count'), // book
    wordCount: integer('word_count'), // novel
    publishedAt: integer('published_at', { mode: 'timestamp' }),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`(strftime('%s', 'now'))`),
    updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull().default(sql`(strftime('%s', 'now'))`),
  },
  t => ({
    idxLibrary: index('items_idx_library').on(t.libraryId),
  }),
)

export const chapters = sqliteTable(
  'chapters',
  {
    id: integer('id').primaryKey({ autoIncrement: true }),
    parentId: integer('parent_id'),
    itemId: integer('item_id').notNull().references(() => items.id),
    name: text('title', { length: MAX_VAR_SIZE }).notNull(),
    cover: text('cover', { length: MAX_VAR_SIZE }),
    publishedAt: integer('published_at', { mode: 'timestamp' }),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`(strftime('%s', 'now'))`),
    updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull().default(sql`(strftime('%s', 'now'))`),
  },
  t => ({
    parentRef: foreignKey({
      name: 'chapters_fk_parent_id',
      columns: [t.parentId],
      foreignColumns: [t.id],
    }),
    idxItem: index('chapters_idx_item').on(t.itemId),
  }),
)

export const tags = sqliteTable(
  'tags',
  {
    id: integer('id').primaryKey({ autoIncrement: true }),
    parentId: integer('parent_id'),
    libraryId: integer('library_id').notNull().references(() => libraries.id),
    name: text('name', { length: MAX_VAR_SIZE }).notNull(),
    type: integer('type').notNull(),
    thumb: text('avatar', { length: MAX_VAR_SIZE }),
    description: text('description'),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`(strftime('%s', 'now'))`),
    updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull().default(sql`(strftime('%s', 'now'))`),
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
    itemId: integer('item_id').notNull().references(() => items.id),
    tagId: integer('tag_id').notNull().references(() => tags.id),
    order: integer('order').notNull().default(0),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`(strftime('%s', 'now'))`),
    updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull().default(sql`(strftime('%s', 'now'))`),
  },
  t => ({
    uniqIdxItemTag: unique('taggings_uniq_idx_item_tag').on(t.itemId, t.tagId),
    idxItem: index('taggings_idx_item').on(t.itemId),
    idxTag: index('taggings_idx_tag').on(t.tagId),
  }),
)

export const playlists = sqliteTable(
  'playlists',
  {
    id: integer('id').primaryKey({ autoIncrement: true }),
    userId: integer('user_id').notNull().references(() => users.id),
    libraryId: integer('library_id').references(() => libraries.id),
    name: text('name', { length: MAX_VAR_SIZE }).notNull(),
    type: text('type', { enum: ['History', 'Favorite', 'Normal'], length: MAX_VAR_SIZE }).notNull().default('Normal'),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`(strftime('%s', 'now'))`),
    updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull().default(sql`(strftime('%s', 'now'))`),
  },
  t => ({
    idxUser: index('playlists_idx_user').on(t.userId),
    idxLibrary: index('playlists_idx_library').on(t.libraryId),
  }),
)

export const playlistItems = sqliteTable(
  'playlist_items',
  {
    playlistId: integer('playlist_id').notNull().references(() => playlists.id),
    itemId: integer('item_id').notNull().references(() => items.id),
    historyBookPageNo: integer('history_book_page_no'),
    historyNovelChapterNo: integer('history_novel_chapter_no'),
    historyComicChapterId: integer('history_comic_chapter_id'),
    historyComicPageNo: integer('history_comic_page_no'),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`(strftime('%s', 'now'))`),
    updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull().default(sql`(strftime('%s', 'now'))`),
  },
  t => ({
    uniqIdxPlaylistItem: unique('playlist_items_uniq_idx_playlist_item').on(t.playlistId, t.itemId),
    idxPlaylist: index('playlist_items_idx_playlist').on(t.playlistId),
    idxItem: index('playlist_items_idx_item').on(t.itemId),
  }),
)

export const settings = sqliteTable(
  'settings',
  {
    id: integer('id').primaryKey({ autoIncrement: true }),
    userId: integer('user_id').notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`(strftime('%s', 'now'))`),
    updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull().default(sql`(strftime('%s', 'now'))`),
  },
  t => ({
    uniqUser: unique('settings_uniq_user').on(t.userId),
  }),
)
