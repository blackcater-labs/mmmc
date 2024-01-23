import path from 'node:path'
import { Elysia } from 'elysia'
import yoga from '@elysiajs/graphql-yoga'
import cors from '@elysiajs/cors'
import { rateLimit } from 'elysia-rate-limit'
import debug from 'debug'

import type { AppConfig } from './types'
import { createLogger } from './utils/log'

export async function setup(config: AppConfig) {
  const d = debug('mmmc:setup')
  const logger = createLogger()
  const app = new Elysia()
  const schema = Bun.file(path.resolve(config.paths.cwd, 'schema.graphql'))

  d('schema.graphql path: %s', schema.name)

  app
    .use(logger.into())
    .use(cors())
    .use(rateLimit())
    .use(yoga({
      typeDefs: await schema.text(),
      resolvers: {},
    }))

  return app
}
