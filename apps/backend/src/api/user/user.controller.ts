import { Controller, Get, UseGuards } from '@nestjs/common'
import { Logger } from 'winston'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { UserService } from './user.service'
import { createContextLogger } from '@/util/logger'

@ApiBearerAuth()
@ApiTags('User')
@Controller('user')
export class UserController {
  private readonly logger: Logger

  constructor(private readonly userService: UserService) {
    this.logger = createContextLogger(UserController.name)
  }

  @Get()
  async findAll(): Promise<[]> {
    return []
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async profile() {
  }
}
