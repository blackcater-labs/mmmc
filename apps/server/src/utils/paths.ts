import process from 'node:process'
import path from 'node:path'
import fs from 'node:fs'
import os from 'node:os'

import type { Paths } from '@/types'

export function ensureDir(dir: string): string {
  dir = path.resolve(process.cwd(), dir)
  if (!fs.existsSync(dir))
    fs.mkdirSync(dir, { recursive: true })
  return dir
}

let _paths: Paths | null = null

export function getMmmcDir() {
  if (Bun.env.NODE_ENV === 'production')
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
  const logsDir = ensureDir(path.resolve(dataDir, paths.logsDir || 'logs'))
  const dbDir = ensureDir(path.resolve(dataDir, paths.dbDir || 'db'))
  const cacheDir = ensureDir(path.resolve(dataDir, paths.cacheDir || 'cache'))
  const uploadDir = ensureDir(path.resolve(dataDir, paths.uploadDir || 'upload'))

  return _paths = {
    cwd,
    migrationsDir,
    contentDir,
    dataDir,
    logsDir,
    dbDir,
    cacheDir,
    uploadDir,
  }
}

export function updatePaths(paths: Partial<Paths>): Paths {
  return genPaths(paths, true)
}

export function paths() {
  return genPaths()
}
