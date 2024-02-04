import type { Resolvers } from '@mmmc/lens/server'

import cors from '@elysiajs/cors'
import yoga from '@elysiajs/graphql-yoga'
import debug from 'debug'
import { Elysia } from 'elysia'
import { rateLimit } from 'elysia-rate-limit'
import { DateResolver, DateTimeResolver, TimestampResolver } from 'graphql-scalars'
import { GraphQLJSON, GraphQLJSONObject } from 'graphql-type-json'
import path from 'node:path'

import type { AppConfig } from './types'

import { controllers } from './controllers'
import { userService } from './services/user'
import { getDB } from './utils/db'
import { UnauthorizedMmmcError } from './utils/error'
import { signJWTToken, verifyJWTToken } from './utils/jwt'
import { createLogger } from './utils/log'

export async function setup(config: AppConfig) {
  const logger = createLogger()
  const app = new Elysia()
  const schema = Bun.file(path.resolve(config.paths.cwd, 'schema.graphql'))

  debug('mmmc:setup')('schema.graphql path: %s', schema.name)

  app
    .use(logger.into())
    .use(cors())
    // FIXME?: 10 requests per second, per IP. Maybe too much?
    .use(rateLimit({ duration: 1000, max: 10 }))
    .use(yoga({
      path: '/api/graphql',
      graphqlEndpoint: '/api/graphql',

      typeDefs: await schema.text(),

      context: async ({ request }) => {
        const raw = request.headers.get('authorization')
        const token = raw?.replace(/^Bearer\s/, '')
        const db = getDB()
        let currentUser = null
        if (token) {
          try {
            const payload = await verifyJWTToken(token, config.jwt.secret)
            currentUser = await userService.getUserById(db, payload.id)
          }
          catch (err) {
            // TODO: Log error
            logger.error(err)
          }
        }

        return {
          db,
          logger,
          currentUser,
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
        Query: {
          me: async (_, __, ctx) => {
            if (!ctx.currentUser)
              throw new UnauthorizedMmmcError()
            return ctx.currentUser
          },
        },

        // Mutations
        Mutation: {
          register: async (_, args, ctx) => controllers.auth.register(ctx, args),
          login: async (_, args, ctx) => {
            const user = await controllers.auth.login(ctx, args)

            // Sign JWT token
            const jwt = await signJWTToken(
              { id: user.id, role: user.role },
              config.jwt.secret,
              { expiresIn: config.jwt.experiesIn },
            )

            debug('mmmc:graphql:login')('jwt: %s', jwt)

            return {
              user,
              access_token: jwt,
            }
          },
        },
      } satisfies Resolvers,
    }))

  return app
}
