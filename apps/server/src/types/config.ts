import type { Paths } from './paths'
import type { DeepPartial } from './utils'

export interface ArgOptions {
  port?: number
  timeZone?: string
  config?: string
}

export interface EnvOptions {
  port?: number
  timeZone?: string
}

interface ServerConfig {
  port: number
  timeZone: string
  contentDir: string
  dataDir: string
}

export interface MmmcOptions {
  server?: DeepPartial<ServerConfig>
}

export interface AppConfig {
  server: Omit<ServerConfig, 'contentDir' | 'dataDir'>
  paths: Paths
}
