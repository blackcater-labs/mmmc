import { ApiProperty } from '@nestjs/swagger'

import { UserEntity } from '@/modules/user/entity/user.entity'

export class TokenRespDTO {
  @ApiProperty({ description: 'Access token' })
  access_token: string

  @ApiProperty()
  user: UserEntity
}
