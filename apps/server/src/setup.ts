import path from 'node:path'
import { Elysia } from 'elysia'
import yoga from '@elysiajs/graphql-yoga'
import cors from '@elysiajs/cors'
import { rateLimit } from 'elysia-rate-limit'
import debug from 'debug'
import { GraphQLJSON, GraphQLJSONObject } from 'graphql-type-json'
import { DateResolver, DateTimeResolver, TimestampResolver } from 'graphql-scalars'

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
    // FIXME?: 10 requests per second, per IP. Maybe too much?
    .use(rateLimit({ duration: 1000, max: 10 }))
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
        // Scalars
        Date: DateResolver,
        DateTime: DateTimeResolver,
        Timestamp: TimestampResolver,
        JSON: GraphQLJSON,
        JSONObject: GraphQLJSONObject,

        // Types

        // Queries

        // Mutations
        Mutation: {
          register: async (_, args, ctx) => controllers.auth.register(ctx, args),
          login: async (_, args, ctx) => controllers.auth.login(ctx, args),
        },
      } satisfies Resolvers,
    }))

  return app
}
