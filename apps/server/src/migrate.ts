import { migrate } from 'drizzle-orm/better-sqlite3/migrator'

import { load } from './config'
import { getDB } from './utils/db'

const config = load()
const db = getDB()

await migrate(db, { migrationsFolder: config.paths.migrationsDir })
