import type { ElysiaLogger } from '@bogeychan/elysia-logger/types'

import { createPinoLogger } from '@bogeychan/elysia-logger'
import path from 'node:path'

import { DEFAULT_LOG_FILE_NAME } from '~/constants'

import { paths } from './paths'

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
