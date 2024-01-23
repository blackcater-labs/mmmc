// Drizzle Schema for Sqlite Database

import { foreignKey, index, integer, sqliteTable, text, unique } from 'drizzle-orm/sqlite-core'
import { sql } from 'drizzle-orm'

export const users = sqliteTable(
  'users',
  {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    email: text('email').notNull(),
    password: text('password').notNull(),
    role: text('role', { enum: ['admin', 'user'] }).default('user'),
    historyPlaylistId: integer('history_playlist_id', { mode: 'number' }).notNull(), // global history playlist
    favoritePlaylistId: integer('favorite_playlist_id', { mode: 'number' }).notNull(), // global favorite playlist
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
    historyPlaylistId: integer('history_playlist_id', { mode: 'number' }).notNull(), // library history playlist
    favoritePlaylistId: integer('favorite_playlist_id', { mode: 'number' }).notNull(), // library favorite playlist
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`CURRENT_TIMESTAMP`),
    updatedAt: integer('updated_at', { mode: 'timestamp' }),
  },
  t => ({
    uniqIdxUserName: unique('libraries_uniq_idx_user_name').on(t.userId, t.name),
    idxUser: index('libraries_idx_user').on(t.userId),
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
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`CURRENT_TIMESTAMP`),
    updatedAt: integer('updated_at', { mode: 'timestamp' }),
    publishedAt: integer('published_at', { mode: 'timestamp' }),
  },
  t => ({
    idxLibrary: index('items_idx_library').on(t.libraryId),
  }),
)

export const chapters = sqliteTable(
  'chapters',
  {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    parentId: integer('id', { mode: 'number' }),
    itemId: integer('id', { mode: 'number' }).notNull().references(() => items.id),
    name: text('title').notNull(),
    cover: text('cover'),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`CURRENT_TIMESTAMP`),
    publishedAt: integer('published_at', { mode: 'timestamp' }),
    updatedAt: integer('updated_at', { mode: 'timestamp' }),
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
    itemId: integer('id', { mode: 'number' }).notNull().references(() => items.id),
    tagId: integer('id', { mode: 'number' }).notNull().references(() => tags.id),
    order: integer('order').notNull().default(0),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`CURRENT_TIMESTAMP`),
    updatedAt: integer('updated_at', { mode: 'timestamp' }),
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
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    userId: integer('id', { mode: 'number' }).notNull().references(() => users.id),
    libraryId: integer('id', { mode: 'number' }).references(() => libraries.id),
    name: text('name').notNull(),
    type: text('type', { enum: ['history', 'favorite', 'normal'] }).notNull().default('normal'),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`CURRENT_TIMESTAMP`),
    updatedAt: integer('updated_at', { mode: 'timestamp' }),
  },
  t => ({
    idxUser: index('playlists_idx_user').on(t.userId),
    idxLibrary: index('playlists_idx_library').on(t.libraryId),
  }),
)

export const playlistItems = sqliteTable(
  'playlist_items',
  {
    playlistId: integer('id', { mode: 'number' }).notNull().references(() => playlists.id),
    itemId: integer('id', { mode: 'number' }).notNull().references(() => items.id),
    historyBookPageNo: integer('history_book_page_no'),
    historyNovelChapterNo: integer('history_novel_chapter_no'),
    historyComicChapterId: integer('history_comic_chapter_id'),
    historyComicPageNo: integer('history_comic_page_no'),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`CURRENT_TIMESTAMP`),
    updatedAt: integer('updated_at', { mode: 'timestamp' }),
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
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    userId: integer('id', { mode: 'number' }).notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`CURRENT_TIMESTAMP`),
    updatedAt: integer('updated_at', { mode: 'timestamp' }),
  },
  t => ({
    uniqUser: unique('settings_uniq_user').on(t.userId),
  }),
)
