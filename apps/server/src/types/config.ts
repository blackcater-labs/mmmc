import type { Paths } from './paths'
import type { DeepPartial } from './utils'

export interface ArgOptions {
  // -c, --config
  config?: string
  // --content-dir
  contentDir?: string
  // --data-dir
  dataDir?: string

  // -p, --port
  port?: number
  // -t, --tz, --time-zone
  timeZone?: string
}

export interface EnvOptions {
  // CONTENT_DIR
  contentDir?: string
  // DATA_DIR
  dataDir?: string

  // JWT_SECRET
  jwtSecret: string

  // PORT
  port?: number
  // TIME_ZONE
  timeZone?: string
}

interface ServerConfig {
  port: number
  timeZone: string
}

interface JWTConfig {
  experiesIn: string
  secret: string
}

export interface MmmcOptions {
  server?: DeepPartial<ServerConfig>
}

export interface AppConfig {
  jwt: JWTConfig
  paths: Paths
  server: ServerConfig
}
