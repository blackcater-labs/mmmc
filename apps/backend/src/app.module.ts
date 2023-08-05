import { Logger, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from '@/app.controller'
import { AppService } from '@/app.service'
import { register as appRegister } from '@/config/app.config'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [appRegister] }),
  ],
  controllers: [AppController],
  providers: [AppService, Logger],
})
export class AppModule {}
