import { DeepPartial } from './utils'

export interface MmmcOptions {
  port: number

  timeZone: string

  cluster: boolean | {
    workersCount: number
  }

  log: {
    level: string
    color: boolean
  }
}

export interface DBOptions {
  file: string
}

export interface EnvConfig {
  port?: number // PORT
  timeZone?: string // TZ
  logLevel?: string // LOG_LEVEL
  color?: boolean // COLOR
  cluster?: boolean // CLUSTER
  clusterWorkers?: number // CLUSTER_WORKERS

  // db, DB_FILE
  dbFile?: string
}

export interface ArgsConfig extends EnvConfig {
  config?: string
}

export type MmmcConfig = DeepPartial<AppConfig>

export interface AppConfig {
  // Mmmc options
  mmmc?: MmmcOptions

  // Database options
  db?: DBOptions
}
