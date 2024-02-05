import type { Resolvers } from '@mmmc/lens/server'

import Cors from '@fastify/cors'
import RateLimit from '@fastify/rate-limit'
import debug from 'debug'
import Fastify, { type FastifyInstance } from 'fastify'
import GracefulShutdown from 'fastify-graceful-shutdown'
import { DateResolver, DateTimeResolver, TimestampResolver } from 'graphql-scalars'
import { GraphQLJSON, GraphQLJSONObject } from 'graphql-type-json'
import { createSchema, createYoga } from 'graphql-yoga'
import fs from 'node:fs/promises'
import path from 'node:path'

import type { AppConfig } from './types'

import { DEFAULT_LOG_FILE_NAME } from './constants'
import { controllers } from './controllers'
import { userService } from './services/user'
import { getDB } from './utils/db'
import { UnauthorizedMmmcError } from './utils/error'
import { signJWTToken, verifyJWTToken } from './utils/jwt'

export async function setup(config: AppConfig) {
  const app = Fastify({
    logger: {
      file: path.resolve(config.paths.logsDir, DEFAULT_LOG_FILE_NAME),
      level: 'info',
      transport: {
        target: 'pino-pretty',
      },
    },
  })

  await app.register(GracefulShutdown)
  await app.register(Cors, {
    origin: (_origin, cb) => cb(null, true),
  })
  await app.register(RateLimit, { max: 100, timeWindow: '1 minute' })

  await setupGraphQL(app, config)

  app.after(() => {
    app.gracefulShutdown((_signal, next) => {
      next()
    })
  })

  await app.ready()

  return app
}

async function setupGraphQL(app: FastifyInstance, config: AppConfig) {
  const schemaContent = await fs.readFile(path.resolve(config.paths.cwd, 'schema.graphql'), 'utf-8')
  const yoga = createYoga({
    logging: {
      debug: (...args) => args.forEach(arg => app.log.debug(arg)),
      info: (...args) => args.forEach(arg => app.log.info(arg)),
      warn: (...args) => args.forEach(arg => app.log.warn(arg)),
      error: (...args) => args.forEach(arg => app.log.error(arg)),
    },

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
          app.log.error(err)
        }
      }

      return {
        db,
        logger: app.log,
        currentUser,
      }
    },

    schema: createSchema({
      typeDefs: schemaContent,

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

            debug('mmmc:yoga:login')('jwt: %s', jwt)

            return {
              user,
              access_token: jwt,
            }
          },
        },
      } satisfies Resolvers,
    }),
  })

  app.route({
    url: yoga.graphqlEndpoint,
    method: ['GET', 'POST', 'OPTIONS'],
    handler: async (req, reply) => {
      // Second parameter adds Fastify's `req` and `reply` to the GraphQL Context
      const response = await yoga.handleNodeRequest(req, {
        req,
        reply,
      })

      response.headers.forEach((value, key) => {
        reply.header(key, value)
      })

      reply.status(response.status)
      reply.send(response.body)

      return reply
    },
  })
}
