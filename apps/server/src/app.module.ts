import { join } from 'node:path'
import { ClassSerializerInterceptor, Logger, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ServeStaticModule } from '@nestjs/serve-static'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { AcceptLanguageResolver, I18nModule } from 'nestjs-i18n'

import { ApiModule } from './modules/api.module'
import { PrismaModule } from './modules/prisma/prisma.module'
import { LoggerModule } from './modules/logger/logger.module'
import defaultConfig from './config/default'
import { isProd } from './utils'
import { BizInterceptor } from './interceptors/biz.interceptor'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: true,
      load: [defaultConfig],
    }),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: join(__dirname, './i18n/'),
        watch: !isProd,
      },
      resolvers: [AcceptLanguageResolver],
      typesOutputPath: join(__dirname, '../src/generated/i18n.generated.ts'),
    }),
    ServeStaticModule.forRoot({
      rootPath: isProd ? join(__dirname, './client') : join(__dirname, '../../web/dist'),
      exclude: ['/api/(.*)'],
    }),
    PrismaModule,
    LoggerModule,
    ApiModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: BizInterceptor,
    },
  ],
})
export class AppModule {}
