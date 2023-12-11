import { ApiProperty } from '@nestjs/swagger'
import { IsString, MinLength } from 'class-validator'

export class LoginDTO {
  @IsString()
  @MinLength(2)
  @ApiProperty({ description: 'Username' })
  username: string

  @IsString()
  @MinLength(4)
  @ApiProperty({ description: 'Password' })
  password: string
}
