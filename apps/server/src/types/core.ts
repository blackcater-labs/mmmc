import type { ElysiaLogger } from '@bogeychan/elysia-logger/types'

import type { UserModel } from '~/models/user'
import type { DB } from '~/utils/db'

import type { Optional } from './utils'

export interface Ctx {
  currentUser: Optional<UserModel>
  db: DB
  logger: ElysiaLogger
  request: Request
}
