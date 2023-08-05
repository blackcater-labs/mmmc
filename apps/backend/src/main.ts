import { NestFactory } from '@nestjs/core'
import { rateLimit } from 'express-rate-limit'
import * as compression from 'compression'
import helmet from 'helmet'
import { ConfigService } from '@nestjs/config'
import { AppModule } from '@/app.module'
import { HttpExceptionFilter } from '@/filter/http-exception.filter'
import { TransformInterceptor } from '@/interceptor/transform.interceptor'
import { logger } from '@/utils/logger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger })
  const config = app.get(ConfigService)

  app.setGlobalPrefix(config.get<string>('app.apiPrefix'))

  app.enableCors()
  app.use(rateLimit({ windowMs: 60 * 1000, max: 1000 }))
  app.use(compression())
  app.use(helmet())

  app.useGlobalInterceptors(new TransformInterceptor()) // 正确响应处理
  app.useGlobalFilters(new HttpExceptionFilter()) // 错误响应处理

  await app.listen(config.get<number>('app.port'))
}

bootstrap()
