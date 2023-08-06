import { Global, Logger, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { register as appRegister } from './config/app.config'
import { register as jwtRegister } from './config/jwt.config'
import { PrismaService } from './service/prisma.service'

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appRegister, jwtRegister],
    }),
  ],
  providers: [PrismaService, Logger],
  exports: [PrismaService, Logger],
})
export class SharedModule {}
