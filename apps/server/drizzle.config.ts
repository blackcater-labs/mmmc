import process from 'node:process'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './src/utils/schema.ts',
  driver: 'better-sqlite',
  out: './migrations',
  dbCredentials: {
    url: '../../data/Database/mmmc.db', // Local file path
  },
  verbose: true,
  strict: true,
})
