import cac from 'cac'
import debug from 'debug'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import yaml from 'yaml'
import { z } from 'zod'

import type { AppConfig, ArgOptions, EnvOptions, MmmcOptions } from '~/types'

import { getMmmcDir, updatePaths } from '~/utils/paths'

const program = cac('server')

program
  .option('-p, --port <port>', 'Port to listen on')
  .option('-t, --tz, --time-zone <timeZone>', 'Timezone to use')
  .option('-c, --config <config>', 'Path to config file')
  .option('--content-dir <contentDir>', 'Path to content directory')
  .option('--data-dir <dataDir>', 'Path to data directory')
  .help()

const { options: args } = program.parse(Bun.argv)

if (args.help)
  process.exit(0)

function parseArgs(): ArgOptions {
  return {
    port: args.port,
    timeZone: args.timeZone,
    config: args.config,
    contentDir: args.contentDir,
    dataDir: args.dataDir,
  }
}

function parseEnvs(): EnvOptions {
  const schema = z.object({
    PORT: z.string().optional(),
    TIME_ZONE: z.string().optional(),
    JWT_SECRET: z.string(),
    CONTENT_DIR: z.string().optional(),
    DATA_DIR: z.string().optional(),
  })

  try {
    const data = schema.parse(Bun.env)

    return {
      port: data.PORT ? Number(data.PORT) : undefined,
      timeZone: data.TIME_ZONE,
      jwtSecret: data.JWT_SECRET,
      contentDir: data.CONTENT_DIR,
      dataDir: data.DATA_DIR,
    }
  }
  catch (err) {
    console.error(err)
    process.exit(1)
  }
}

function parseConfigFile(file?: string): MmmcOptions {
  file = path.resolve(getMmmcDir(), file || 'config/mmmc.yaml')
  debug('mmmc:config')('Loading config file: %s', file)
  return fs.existsSync(file) ? (yaml.parse(fs.readFileSync(file, 'utf-8')) || {}) : {}
}

let _config: AppConfig | null = null
export function load(): AppConfig {
  if (_config)
    return _config
  const args = parseArgs()
  const envs = parseEnvs()
  const opts = parseConfigFile(args.config)

  return _config = {
    server: {
      port: args.port || opts.server?.port || envs.port || 4000,
      timeZone: args.timeZone || opts.server?.timeZone || envs.timeZone || 'Asia/Shanghai',
    },
    paths: updatePaths({
      contentDir: args.contentDir || envs.contentDir || 'content',
      dataDir: args.dataDir || envs.dataDir || 'data',
    }),
    jwt: {
      secret: envs.jwtSecret,
      experiesIn: '30d',
    },
  }
}
