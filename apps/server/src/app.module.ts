import path from 'node:path'
import { ClassSerializerInterceptor, Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { ServeStaticModule } from '@nestjs/serve-static'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { AcceptLanguageResolver, I18nModule } from 'nestjs-i18n'
import { LoggerModule } from 'nestjs-pino'
import pino from 'pino'

import { APP_DEFAULT_LOG_FILE } from '@/constants/app'
import { ApiModule } from '@/modules/api.module'
import { PrismaModule } from '@/modules/prisma/prisma.module'
import { BizInterceptor } from '@/common/interceptors/biz.interceptor'
import { isProd } from '@/utils/env'
import { paths } from '@/utils/path'
import { load as loadConfig } from '@/utils/config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: true,
      load: [loadConfig],
    }),
    LoggerModule.forRootAsync({
      useFactory: async (config: ConfigService) => {
        return {
          pinoHttp: {
            level: config.get('mmmc.log.level'),
            stream: pino.destination({
              dest: path.resolve(paths.logs, APP_DEFAULT_LOG_FILE),
              minLength: 4096,
              sync: false,
            }),
            transport: {
              target: 'pino-pretty',
            },
          },
        }
      },
      inject: [ConfigService],
    }),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.resolve(__dirname, './i18n/'),
        watch: !isProd,
      },
      resolvers: [AcceptLanguageResolver],
      typesOutputPath: path.resolve(__dirname, '../src/types/i18n.generated.ts'),
    }),
    ServeStaticModule.forRoot({
      rootPath: isProd
        ? path.resolve(__dirname, './client')
        : path.resolve(__dirname, '../../web/dist'),
      exclude: ['/api/(.*)'],
    }),
    PrismaModule,
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
