import path from 'node:path'
import { Elysia } from 'elysia'
import yoga from '@elysiajs/graphql-yoga'
import cors from '@elysiajs/cors'
import { rateLimit } from 'elysia-rate-limit'
import debug from 'debug'

import type { AppConfig, Resolvers } from './types'
import { createLogger } from './utils/log'
import { getDB } from './utils/db'
import { controllers } from './controllers'

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
      context: async ({ request: _request }) => {
        // _request for getting authentification token

        return {
          db: getDB(),
          logger,
          currentUser: null, // user from authentification token
        }
      },
      resolvers: {
        Mutation: {
          register: async (_, args, ctx) => controllers.auth.register(ctx, args),
          login: async (_, args, ctx) => controllers.auth.login(ctx, args),
        },
      } satisfies Resolvers,
    }))

  return app
}
