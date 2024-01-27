import type { Paths } from './paths'
import type { DeepPartial } from './utils'

export interface ArgOptions {
  // -p, --port
  port?: number
  // -t, --tz, --time-zone
  timeZone?: string
  // -c, --config
  config?: string

  // --content-dir
  contentDir?: string
  // --data-dir
  dataDir?: string
}

export interface EnvOptions {
  // PORT
  port?: number
  // TIME_ZONE
  timeZone?: string

  // JWT_SECRET
  jwtSecret: string

  // CONTENT_DIR
  contentDir?: string
  // DATA_DIR
  dataDir?: string
}

interface ServerConfig {
  port: number
  timeZone: string
}

interface JWTConfig {
  secret: string
  experiesIn: string
}

export interface MmmcOptions {
  server?: DeepPartial<ServerConfig>
}

export interface AppConfig {
  server: ServerConfig
  paths: Paths
  jwt: JWTConfig
}
