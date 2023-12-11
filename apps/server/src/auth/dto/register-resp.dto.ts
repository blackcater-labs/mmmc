import { ApiProperty } from '@nestjs/swagger'

import { UserDO } from '@/user/entity/user.entity'

export class RegisterRespDTO {
  @ApiProperty({ description: 'Access token' })
  access_token: string

  user: UserDO
}
