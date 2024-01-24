import type { ElysiaLogger } from '@bogeychan/elysia-logger/types'

import type { DB } from '@/utils/db'

export interface Ctx {
  db: DB
  logger: ElysiaLogger
  request: Request
  currentUser: null
}
