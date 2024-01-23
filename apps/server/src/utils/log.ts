import path from 'node:path'
import { createPinoLogger } from '@bogeychan/elysia-logger'
import type { ElysiaLogger } from '@bogeychan/elysia-logger/types'

import { paths } from './paths'
import { DEFAULT_LOG_FILE_NAME } from '@/constants'

let _logger: ElysiaLogger

export function createLogger() {
  if (_logger)
    return _logger

  return _logger = createPinoLogger({
    file: path.resolve(paths().logsDir, DEFAULT_LOG_FILE_NAME),
    level: 'info',
    transport: {
      target: 'pino-pretty',
    },
  })
}
