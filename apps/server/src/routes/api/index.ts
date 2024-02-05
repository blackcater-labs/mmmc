import type { FastifyInstance } from 'fastify'

interface Options {}

export async function MmmcAPI(app: FastifyInstance, _opts: Options) {
  app.get('/ping', async (_, reply) => {
    reply.status(200).send('pong')
  })
}
