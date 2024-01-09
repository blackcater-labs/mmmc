import os from 'node:os'
import process from 'node:process'
import path from 'node:path'
import fs from 'node:fs'

import { isDev } from '@/utils/env'
import { Paths } from '@/types'
import { APP_DEFAULT_BACKUP_DIR, APP_DEFAULT_CONFIG_DIR, APP_DEFAULT_DATA_DIR, APP_DEFAULT_DB_DIR, APP_DEFAULT_LOG_DIR } from '@/constants/app'

function _paths(): Paths {
  const homedir = os.homedir()
  const tmpdir = os.tmpdir()
  const cwd = process.cwd()

  return {
    home: homedir,
    temp: tmpdir,
    data: isDev
      ? tryExists(cwd, 'data')
      : tryExists(homedir, APP_DEFAULT_DATA_DIR),
    configs: isDev
      ? tryExists(cwd, 'config')
      : tryExists(homedir, `${APP_DEFAULT_DATA_DIR}/${APP_DEFAULT_CONFIG_DIR}`),
    logs: isDev
      ? tryExists(cwd, `data/${APP_DEFAULT_LOG_DIR}`)
      : tryExists(homedir, `${APP_DEFAULT_DATA_DIR}/${APP_DEFAULT_LOG_DIR}`),
    db: isDev
      ? tryExists(cwd, `data/${APP_DEFAULT_DB_DIR}`)
      : tryExists(homedir, `${APP_DEFAULT_DATA_DIR}/${APP_DEFAULT_DB_DIR}`),
    backups: isDev
      ? tryExists(cwd, `data/${APP_DEFAULT_BACKUP_DIR}`)
      : tryExists(homedir, `${APP_DEFAULT_DATA_DIR}/${APP_DEFAULT_BACKUP_DIR}`),
  }
}

function tryExists(...dirs: string[]) {
  const dir = path.resolve(...dirs)
  if (fs.existsSync(dir))
    return dir
  fs.mkdirSync(dir, { recursive: true })
  return dir
}

export const paths = _paths()
