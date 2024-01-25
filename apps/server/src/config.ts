import process from 'node:process'
import path from 'node:path'
import fs from 'node:fs'
import cac from 'cac'
import yaml from 'yaml'
import deepmerge from 'deepmerge'
import { z } from 'zod'

import { updatePaths } from '@/utils/paths'
import type { AppConfig, ArgOptions, EnvOptions, MmmcOptions } from '@/types'

const program = cac('server')

program
  .option('-p, --port <port>', 'Port to listen on')
  .option('-t, --tz, --time-zone <timeZone>', 'Timezone to use')
  .option('-c, --config <config>', 'Path to config file')
  .help()

const { options: args } = program.parse(Bun.argv)

if (args.help)
  process.exit(0)

function parseArgs(): ArgOptions {
  return {
    port: args.port,
    timeZone: args.timeZone,
    config: args.config,
  }
}

function parseEnvs(): EnvOptions {
  const schema = z.object({
    PORT: z.string().optional(),
    TIME_ZONE: z.string().optional(),
    JWT_SECRET: z.string(),
  })

  try {
    const data = schema.parse(Bun.env)

    return {
      port: data.PORT ? Number(data.PORT) : undefined,
      timeZone: data.TIME_ZONE,
      jwtSecret: data.JWT_SECRET,
    }
  }
  catch (err) {
    console.error(err)
    process.exit(1)
  }
}

function parseConfigFile(file?: string): MmmcOptions {
  file = path.resolve(process.cwd(), file || 'config/mmmc.yaml')
  return fs.existsSync(file) ? (yaml.parse(fs.readFileSync(file, 'utf-8')) || {}) : {}
}

let _config: AppConfig | null = null
export function load(): AppConfig {
  if (_config)
    return _config
  const args = parseArgs()
  const envs = parseEnvs()
  const opts = parseConfigFile(args.config)

  const { server: serverConfig, ...resetConfig } = deepmerge(
    {
      server: {
        port: args.port || opts.server?.port || envs.port,
        timeZone: args.timeZone || opts.server?.timeZone || envs.timeZone,
      },
    } satisfies MmmcOptions,
    {
      server: {
        port: 4000,
        timeZone: 'Asia/Shanghai',
        contentDir: 'content',
        dataDir: 'data',
      },
    } satisfies MmmcOptions,
  )

  return _config = {
    server: {
      port: serverConfig.port,
      timeZone: serverConfig.timeZone,
    },
    ...resetConfig,
    paths: updatePaths({
      contentDir: serverConfig.contentDir,
      dataDir: serverConfig.dataDir,
    }),
    jwt: {
      secret: envs.jwtSecret,
      experiesIn: '30d',
    },
  }
}
