import { ClassSerializerInterceptor, Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common'
import { Logger } from 'winston'
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse, getSchemaPath } from '@nestjs/swagger'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { User } from '../auth/auth.decorator'
import { UserService } from './user.service'
import { UserDto } from './user.dto'
import { createContextLogger } from '@/util/logger'
import { respSchema } from '@/util/schema'

@ApiBearerAuth()
@ApiTags('User')
@Controller('user')
export class UserController {
  private readonly logger: Logger

  constructor(private readonly userService: UserService) {
    this.logger = createContextLogger(UserController.name)
  }

  @ApiOperation({ summary: 'Get current user profile' })
  @ApiOkResponse({ schema: respSchema({ $ref: getSchemaPath(UserDto) }) })
  @ApiUnauthorizedResponse()
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async profile(@User() user: UserDto) {
    return user
  }
}
