import path from 'node:path'
import { drizzle } from 'drizzle-orm/bun-sqlite'
import { Database } from 'bun:sqlite'

import { paths } from './paths'
import * as schema from './schema'
import { DEFAULT_DB_FILE_NAME } from '@/constants'

function createDB() {
  const sqlite = new Database(
    path.resolve(paths().dbDir, DEFAULT_DB_FILE_NAME),
    { create: true, readwrite: true },
  )

  return drizzle(sqlite, { schema })
}

export type DB = ReturnType<typeof createDB>

let _db: DB
export function getDB() {
  if (_db)
    return _db
  return _db = createDB()
}
