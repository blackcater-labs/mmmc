import os from 'node:os'
import process from 'node:process'
import path from 'node:path'
import fs from 'node:fs'

import { isDev } from '@/utils/env'
import { Paths } from '@/types'

function _paths(): Paths {
  const homedir = os.homedir()
  const tmpdir = os.tmpdir()
  const cwd = process.cwd()

  return {
    home: homedir,
    temp: tmpdir,
    data: isDev
      ? tryExists(cwd, 'data')
      : tryExists(homedir, '.mmmc'),
    configs: isDev
      ? tryExists(cwd, 'config')
      : tryExists(homedir, '.mmmc/configs'),
    logs: isDev
      ? tryExists(cwd, 'data/logs')
      : tryExists(homedir, '.mmmc/logs'),
    db: isDev
      ? tryExists(cwd, 'data/db')
      : tryExists(homedir, '.mmmc/db'),
    backups: isDev
      ? tryExists(cwd, 'data/backups')
      : tryExists(homedir, '.mmmc/backups'),
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
