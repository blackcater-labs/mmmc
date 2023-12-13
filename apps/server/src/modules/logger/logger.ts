import { resolve } from 'node:path'
import winston, { createLogger } from 'winston'
import { utilities as nestWinstonUtils } from 'nest-winston'
import 'winston-daily-rotate-file'

export function createLoggerInstance() {
  const logPath = resolve(__dirname, '../../../data/logs')

  return createLogger({
    format: winston.format.combine(),
    transports: [
      new winston.transports.DailyRotateFile({
        filename: resolve(logPath, 'mmmc-%DATE%.log'),
        zippedArchive: false,
        maxSize: '20m',
        maxFiles: '7d',
        format: winston.format.combine(
          winston.format.json(),
          winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
          winston.format.printf(({ level = 'info', message, timestamp, req, err, stack, context, ...metadata }) => {
            if (!req) { req = { headers: {} } }
            else {
              req = {
                method: req.method,
                url: req.url,
                headers: req.headers,
                body: req.body,
              }
            }
            const log = {
              timestamp,
              level,
              context,
              message,
              metadata,
              req,
              error: {},
            }

            if (err)
              log.error = err.stack || stack || err

            return JSON.stringify(log)
          }),
        ),
      }),
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.ms(),
          nestWinstonUtils.format.nestLike('Mmmc', { colors: true, prettyPrint: true }),
        ),
      }),
    ],
  })
}
