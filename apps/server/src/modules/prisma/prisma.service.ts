import { Injectable, OnModuleInit } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PrismaClient } from '@prisma/client'

import { DBOptions } from '@/types'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor(
    private configService: ConfigService,
  ) {
    const db: DBOptions = configService.get('db')
    const dbUrl = `file:${db.file}`

    super({ datasourceUrl: dbUrl })
  }

  async onModuleInit() {
    await this.$connect()
  }
}
