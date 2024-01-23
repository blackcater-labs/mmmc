import process from 'node:process'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './src/utils/schema.ts',
  driver: 'better-sqlite',
  out: './migrations',
  dbCredentials: {
    url: process.env.DATABASE_URL || './data/db/mmmc.db',
  },
  verbose: true,
  strict: true,
})
