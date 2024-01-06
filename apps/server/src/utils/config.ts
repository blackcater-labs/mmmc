import path from 'node:path'
import fs from 'node:fs'
import process from 'node:process'
import cac from 'cac'
import yaml from 'yaml'
import { z } from 'zod'

import { paths } from '@/utils/path'
import { AppConfig, ArgsConfig, DBOptions, EnvConfig, MmmcConfig } from '@/types'
import { APP_DEFAULT_CONFIG_FILE, APP_DEFAULT_DB_FILE } from '@/constants/app'

import 'dotenv/config'

const cli = cac('mmmc-server')
  .option('-p, --port <port>', 'server port')
  .option('-c, --config <file>', 'mmmc.yaml file path')
  .option('--cluster', 'enable cluster mode')
  .option('--cluster-workers <workers_count>', 'cluster workers number')
  .option('--log-level <level>', 'log level')
  .option('--color', 'enable shell color')
  // db
  .option('--db-file <url>', 'sqlite file path')
  .help()

let _config: AppConfig | undefined

export function checkEnv(): EnvConfig {
  const envs = {} as EnvConfig

  // server
  if (process.env.PORT)
    envs.port = +process.env.PORT
  if (process.env.TZ)
    envs.timeZone = process.env.TZ
  if (process.env.LOG_LEVEL)
    envs.logLevel = process.env.LOG_LEVEL
  if (process.env.COLOR)
    envs.color = process.env.COLOR === 'true' || process.env.COLOR === '1'
  if (process.env.CLUSTER)
    envs.cluster = process.env.CLUSTER === 'true' || process.env.CLUSTER === '1'
  if (process.env.CLUSTER_WORKERS)
    envs.clusterWorkers = +process.env.CLUSTER_WORKERS

  // db
  if (process.env.DB_FILE) {
    envs.db = {
      file: process.env.DB_FILE,
    }
  }

  return envs
}

export function checkArgs(): ArgsConfig {
  const args = {} as ArgsConfig
  const { options } = cli.parse()

  if (options.port)
    args.port = +options.port
  if (options.config)
    args.config = options.config
  if (options.cluster)
    args.cluster = options.cluster
  if (options.clusterWorkers)
    args.clusterWorkers = +options.clusterWorkers
  if (options.logLevel)
    args.logLevel = options.logLevel
  if (options.color)
    args.color = options.color

  // db
  if (options.dbFile) {
    args.db = {
      file: options.dbFile,
    }
  }

  return args
}

export function checkConfig(config?: string): MmmcConfig {
  let filePath: string
  if (!config)
    filePath = path.resolve(paths.configs, APP_DEFAULT_CONFIG_FILE)
  else filePath = path.resolve(process.cwd(), config)
  if (!fs.existsSync(filePath))
    throw new Error(`Config file ${filePath} not found`)
  return (yaml.parse(fs.readFileSync(filePath, 'utf-8')) || {}) as MmmcConfig
}

const dbSchema = z.object({
  file: z.string(),
})

export function load(): AppConfig {
  if (_config)
    return _config

  const envs = checkEnv()
  const args = checkArgs()
  const config = checkConfig(args.config)
  const cluster = args.cluster || config.mmmc?.cluster || envs.cluster || false
  const db = dbSchema.parse(args.db || config.db || envs.db || {
    file: path.resolve(paths.db, APP_DEFAULT_DB_FILE),
  }) as DBOptions

  _config = {
    mmmc: {
      port: args.port || config.mmmc?.port || envs.port || 3000,
      timeZone: args.timeZone || config.mmmc?.timeZone || envs.timeZone || 'Asia/Shanghai',
      cluster: cluster
        ? {
            workersCount: args.clusterWorkers || (typeof config.mmmc?.cluster !== 'boolean' ? config.mmmc.cluster.workersCount : 0) || envs.clusterWorkers || 0,
          }
        : false,
      log: {
        level: args.logLevel || config.mmmc?.log?.level || envs.logLevel || 'info',
        color: args.color || config.mmmc?.log?.color || envs.color || true,
      },
    },
    db: {
      ...db,
    },
  }

  return _config
}
