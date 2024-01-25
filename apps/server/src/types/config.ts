import type { Paths } from './paths'
import type { DeepPartial } from './utils'

export interface ArgOptions {
  // -p, --port
  port?: number
  // -t, --tz, --time-zone
  timeZone?: string
  // -c, --config
  config?: string
}

export interface EnvOptions {
  // PORT
  port?: number
  // TIME_ZONE
  timeZone?: string

  // JWT_SECRET
  jwtSecret: string
}

interface ServerConfig {
  port: number
  timeZone: string
  contentDir: string
  dataDir: string
}

interface JWTConfig {
  secret: string
  experiesIn: string
}

export interface MmmcOptions {
  server?: DeepPartial<ServerConfig>
}

export interface AppConfig {
  server: Omit<ServerConfig, 'contentDir' | 'dataDir'>
  paths: Paths
  jwt: JWTConfig
}
