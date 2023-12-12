import { join } from 'node:path'
import { ClassSerializerInterceptor, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ServeStaticModule } from '@nestjs/serve-static'
import { APP_INTERCEPTOR } from '@nestjs/core'

import { ApiModule } from './api.module'
import { PrismaModule } from './prisma/prisma.module'
import defaultConfig from '@/config/default'
import { isProd } from '@/utils'
import { BizInterceptor } from '@/interceptors/biz.interceptor'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: true,
      load: [defaultConfig],
    }),
    ServeStaticModule.forRoot({
      rootPath: isProd ? join(__dirname, '../dist/client') : join(__dirname, '../../web/dist'),
      exclude: ['/api/(.*)'],
    }),
    ApiModule,
    PrismaModule,
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
