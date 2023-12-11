import { join } from 'node:path'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ServeStaticModule } from '@nestjs/serve-static'

import { PrismaModule } from '@/prisma/prisma.module'
import { ApiModule } from '@/api.module'
import configuration from '@/config/configuration'
import { isProd } from '@/lib'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: true,
      load: [configuration],
    }),
    ServeStaticModule.forRoot({
      rootPath: isProd ? join(__dirname, '../dist/client') : join(__dirname, '../../web/dist'),
      exclude: ['/api/(.*)'],
    }),
    ApiModule,
    PrismaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
