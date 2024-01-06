import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common'
import { Logger } from 'nestjs-pino'

import { AppModule } from './app.module'
import { isProd } from '@/utils/env'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  })
  const config = app.get(ConfigService)
  const logger = app.get(Logger)

  app.useLogger(logger)
  app.flushLogs()

  app.setGlobalPrefix('api')
  app.useGlobalPipes(new ValidationPipe({ disableErrorMessages: isProd }))

  SwaggerModule.setup('api', app, SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle('Mmmc API')
      .setDescription('Mmmc is a software for organizing your comics')
      .setVersion('1.0')
      .addBearerAuth()
      .build(),
  ))

  logger.log(`Mmmc is running on port ${config.get('mmmc.port')}`)

  await app.listen(config.get('mmmc.port'))
}

bootstrap()
