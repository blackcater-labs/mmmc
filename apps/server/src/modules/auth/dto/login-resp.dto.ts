import { ApiProperty } from '@nestjs/swagger'

import { UserEntity } from '@/modules/user/entity/user.entity'

export class LoginRespDTO {
  @ApiProperty({ description: 'Access token' })
  access_token: string

  user: UserEntity
}
