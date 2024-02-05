import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import process from 'node:process'

import type { Paths } from '~/types'

export function ensureDir(dir: string): string {
  dir = path.resolve(process.cwd(), dir)
  if (!fs.existsSync(dir))
    fs.mkdirSync(dir, { recursive: true })
  return dir
}

let _paths: Paths | null = null

export function getMmmcDir() {
  if (process.env.NODE_ENV === 'production')
    return path.resolve(os.homedir(), '.mmmc')
  return path.resolve(process.cwd(), '../..')
}

function genPaths(paths: Partial<Paths> = {}, regen: boolean = false): Paths {
  if (_paths && !regen)
    return _paths

  const cwd = paths.cwd || process.cwd()
  const migrationsDir = ensureDir(path.resolve(cwd, paths.migrationsDir || 'migrations'))
  const mmmcDir = getMmmcDir()
  const contentDir = ensureDir(path.resolve(mmmcDir, paths.contentDir || 'content'))
  const dataDir = ensureDir(path.resolve(mmmcDir, paths.dataDir || 'data'))
  const logsDir = ensureDir(path.resolve(dataDir, paths.logsDir || 'Logs'))
  const dbDir = ensureDir(path.resolve(dataDir, paths.dbDir || 'Database'))
  const cacheDir = ensureDir(path.resolve(dataDir, paths.cacheDir || 'Cache'))
  const usersDir = ensureDir(path.resolve(dataDir, paths.usersDir || 'Users'))
  const itemsDir = ensureDir(path.resolve(dataDir, paths.itemsDir || 'Items'))

  return _paths = {
    cwd,
    migrationsDir,
    contentDir,
    dataDir,
    logsDir,
    dbDir,
    cacheDir,
    usersDir,
    itemsDir,
  }
}

export function updatePaths(paths: Partial<Paths>): Paths {
  return genPaths(paths, true)
}

export function paths() {
  return genPaths()
}
