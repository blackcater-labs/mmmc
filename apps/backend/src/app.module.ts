import { Logger, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { register as appRegister } from './config/app.config'
import { PrismaService } from './service/prisma.service'
import { AuthModule } from './domain/auth/auth.module'
import { UserModule } from './domain/user/user.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [appRegister] }),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, Logger],
})
export class AppModule {}
