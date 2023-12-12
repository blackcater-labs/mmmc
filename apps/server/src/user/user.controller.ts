import { Controller, Get } from '@nestjs/common'

import { UserService } from './user.service'
import { UserDO } from './entity/user.entity'
import { User } from '@/decorator/user.decorator'

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('profile')
  async profile(@User('id') userId: number): Promise<UserDO> {
    return await this.userService.findOneById(userId)
  }
}
