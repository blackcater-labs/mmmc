import { Controller, Get } from '@nestjs/common'

import { UserService } from './user.service'
import { UserEntity } from './entity/user.entity'
import { User } from '@/decorator/user.decorator'

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('profile')
  async profile(@User('id') userId: number): Promise<UserEntity> {
    return new UserEntity(await this.userService.findOneById(userId))
  }
}
