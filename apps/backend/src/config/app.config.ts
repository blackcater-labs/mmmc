import * as path from 'node:path'
import { registerAs } from '@nestjs/config'

function r(relativePath: string) {
  return path.resolve(process.cwd(), relativePath || '')
}

export const config = {
  port: Number.parseInt(process.env.APP_PORT, 10) || 3000,
  apiPrefix: process.env.APP_API_PREFIX || '/api',
  dbDir: r(process.env.APP_DB_DIR || './data/db'),
  logsDir: r(process.env.APP_LOGS_DIR || './data/logs'),
  uploadDir: r(process.env.APP_UPLOAD_DIR || './data/upload'),
  comicsDir: r(process.env.APP_COMICS_DIR || './data/comics'),
}
export const register = registerAs('app', () => (config))
