import path from 'node:path'
import { Elysia } from 'elysia'
import yoga from '@elysiajs/graphql-yoga'
import debug from 'debug'

import type { AppConfig } from './types'

export async function setup(config: AppConfig) {
  const d = debug('mmmc:setup')
  const app = new Elysia()
  const schema = Bun.file(path.resolve(config.paths.cwd, 'schema.graphql'))

  d('schema.graphql path: %s', schema.name)

  app
    .use(yoga({
      typeDefs: await schema.text(),
      resolvers: {},
    }))

  return app
}
