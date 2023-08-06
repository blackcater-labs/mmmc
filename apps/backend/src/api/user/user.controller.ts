import { Controller, Get } from '@nestjs/common'
import { Logger } from 'winston'
import { createContextLogger } from '@/utils/logger'

@Controller('user')
export class UserController {
  private readonly logger: Logger

  constructor() {
    this.logger = createContextLogger(UserController.name)
  }

  @Get()
  async findAll(): Promise<[]> {
    this.logger.info('findAll()', { a: 1, b: 2 })

    return []
  }
}
