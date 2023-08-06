import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { ApiModule } from './api/api.module'
import { SharedModule } from './shared.module'
import { config as appConfig } from './config/app.config'

@Module({
  imports: [
    ApiModule,
    SharedModule,
    ServeStaticModule.forRoot({ rootPath: appConfig.staticDir }),
  ],
  providers: [],
})
export class AppModule {}
