import { WinstonModule, utilities as winstonUtils } from 'nest-winston'
import * as winston from 'winston'
import * as DailyRotateFile from 'winston-daily-rotate-file'
import { config as appConfig } from '@/config/app.config'

export const logger = WinstonModule.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.ms(),
        winstonUtils.format.nestLike('Mmmc', { colors: true }),
      ),
    }),
    new DailyRotateFile({
      dirname: appConfig.logsDir,
      frequency: '24h',
      maxFiles: '14d',
      filename: 'mmmc.%DATE%.log',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.ms(),
        winstonUtils.format.nestLike('Mmmc', { colors: false }),
        winston.format.json(),
      ),
    }),
  ],
})
