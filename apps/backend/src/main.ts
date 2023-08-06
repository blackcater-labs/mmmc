import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { rateLimit } from 'express-rate-limit'
import * as compression from 'compression'
import helmet from 'helmet'
import { AppModule } from './app.module'
import { HttpExceptionFilter } from './filter/http-exception.filter'
import { TransformInterceptor } from './interceptor/transform.interceptor'
import { logger } from './util/logger'
import { config as appConfig } from './config/app.config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger })

  app.setGlobalPrefix(appConfig.apiPrefix)

  app.enableCors()
  app.use(rateLimit({ windowMs: 60 * 1000, max: 1000 }))
  app.use(compression())
  app.use(helmet())

  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalInterceptors(new TransformInterceptor()) // 正确响应处理
  app.useGlobalFilters(new HttpExceptionFilter()) // 错误响应处理

  app.enableShutdownHooks()

  await app.listen(appConfig.port)
}

bootstrap()
