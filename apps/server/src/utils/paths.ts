import process from 'node:process'
import path from 'node:path'
import fs from 'node:fs'

import type { Paths } from '@/types'

function ensureDir(dir: string): string {
  dir = path.resolve(process.cwd(), dir)
  if (!fs.existsSync(dir))
    fs.mkdirSync(dir, { recursive: true })
  return dir
}

let _paths: Paths | null = null

function genPaths(paths: Partial<Paths> = {}, regen: boolean = false): Paths {
  if (_paths && !regen)
    return _paths

  const cwd = paths.cwd || process.cwd()
  const migrationsDir = ensureDir(paths.migrationsDir || `${cwd}/migrations`)
  const contentDir = ensureDir(paths.contentDir || `${cwd}/content`)
  const dataDir = ensureDir(paths.dataDir || `${cwd}/data`)
  const logsDir = ensureDir(paths.logsDir || `${dataDir}/logs`)
  const dbDir = ensureDir(paths.dbDir || `${dataDir}/db`)
  const cacheDir = ensureDir(paths.cacheDir || `${dataDir}/cache`)
  const uploadDir = ensureDir(paths.uploadDir || `${dataDir}/upload`)

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
