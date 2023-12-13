import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common'
import { WinstonModule } from 'nest-winston'

import { isProd } from './utils'
import { AppModule } from './app.module'
import { createLoggerInstance } from './modules/logger/logger'

async function bootstrap() {
  const winstonInstance = createLoggerInstance()
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({ instance: winstonInstance }),
  })
  const configService = app.get(ConfigService)

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

  await app.listen(configService.get<string>('PORT'))
}

bootstrap()
