import path from 'node:path'
import type { BunSQLiteDatabase } from 'drizzle-orm/bun-sqlite'
import { drizzle } from 'drizzle-orm/bun-sqlite'
import { Database } from 'bun:sqlite'

import { paths } from './paths'
import { DEFAULT_DB_FILE_NAME } from '@/constants'

let _db: BunSQLiteDatabase

export function getDB(dbDir?: string) {
  if (_db)
    return _db

  const sqlite = new Database(
    path.resolve(dbDir || paths().dbDir, DEFAULT_DB_FILE_NAME),
    { create: true, readwrite: true },
  )

  return _db = drizzle(sqlite)
}
