import type { FastifyBaseLogger } from 'fastify'

import type { UserModel } from '~/models/user'
import type { DB } from '~/utils/db'

import type { Optional } from './utils'

export interface Ctx {
  currentUser: Optional<UserModel>
  db: DB
  logger: FastifyBaseLogger
  request: Request
}
