import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common'

import { isProd } from '@/lib'
import { AppModule } from '@/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigService)

  app.setGlobalPrefix('api')
  app.useGlobalPipes(new ValidationPipe({ disableErrorMessages: isProd }))

  SwaggerModule.setup('api', app, SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle('Mmmc API')
      .setDescription('Mmmc is a software for organizing your comics')
      .setVersion('1.0')
      .setBasePath('api')
      .addBearerAuth()
      .build(),
  ))

  await app.listen(configService.get<string>('PORT'))
}
bootstrap()
