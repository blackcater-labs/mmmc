import { Controller, Get, Logger, Req } from '@nestjs/common'
import { ApiBearerAuth, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger'

import { UserService } from './user.service'
import { UserEntity } from './entity/user.entity'
import { User } from '@/common/decorators/user.decorator'
import { ApiOkResponeCustom } from '@/common/decorators/swagger.decorator'

@Controller('user')
@ApiTags('User')
@ApiBearerAuth()
export class UserController {
  constructor(private userService: UserService) {}

  @Get('profile')
  @ApiOkResponeCustom(UserEntity)
  @ApiUnauthorizedResponse()
  async profile(@User('id') userId: number): Promise<UserEntity> {
    return new UserEntity(await this.userService.findOneById(userId))
  }
}
