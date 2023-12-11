import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigService)
  const document = SwaggerModule.createDocument(app, new DocumentBuilder()
    .setTitle('Mmmc API')
    .setDescription('Mmmc is a software for organizing your comics')
    .setVersion('1.0')
    .build())

  SwaggerModule.setup('api', app, document)

  await app.listen(configService.get<string>('port'))
}
bootstrap()
