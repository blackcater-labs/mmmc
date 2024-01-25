import type { ElysiaLogger } from '@bogeychan/elysia-logger/types'

import type { Optional } from './utils'
import type { DB } from '@/utils/db'
import type { UserModel } from '@/models/user'

export interface Ctx {
  db: DB
  logger: ElysiaLogger
  request: Request
  currentUser: Optional<UserModel>
}
