import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/service/prisma.service'

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {
  }

  public getHello(): string {
    return 'Hello World!'
  }
}
