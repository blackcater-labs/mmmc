import { NestFactory } from '@nestjs/core'
import type { INestApplication } from '@nestjs/common'
import { ValidationPipe } from '@nestjs/common'
import { rateLimit } from 'express-rate-limit'
import * as compression from 'compression'
import helmet from 'helmet'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ConfigService } from '@nestjs/config'
import { AppModule } from './app.module'
import { HttpExceptionFilter } from './filter/http-exception.filter'
import { TransformInterceptor } from './interceptor/transform.interceptor'
import { logger } from './util/logger'

function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Mmmc OpenAPI')
    .setDescription('Mmmc OpenAPI Document')
    .setVersion('1.0')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('api', app, document)
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger })
  const configService = app.get(ConfigService)

  app.setGlobalPrefix(configService.get('app.apiPrefix'))

  app.enableCors()
  app.use(rateLimit({ windowMs: 60 * 1000, max: 1000 }))
  app.use(compression())
  app.use(helmet())

  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalInterceptors(new TransformInterceptor()) // 正确响应处理
  app.useGlobalFilters(new HttpExceptionFilter()) // 错误响应处理

  app.enableShutdownHooks()

  setupSwagger(app)

  await app.listen(configService.get('app.port'))
}

bootstrap()
