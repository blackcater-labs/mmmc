import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsEnum, IsNumber, IsOptional, IsString, MinLength } from 'class-validator'

import { UserRole } from '@/user/entity/user.entity'

export class RegisterDTO {
  @IsString()
  @MinLength(2)
  @ApiProperty({ description: 'Username' })
  username: string

  @IsString()
  @MinLength(4)
  @ApiProperty({ description: 'Password' })
  password: string

  @IsString()
  @MinLength(4)
  @ApiProperty({ description: 'Password confirm' })
  passwordConfirm: string

  @IsOptional()
  @IsNumber()
  @IsEnum(UserRole)
  @ApiPropertyOptional({ name: 'role', enum: UserRole, description: 'Role of user', default: UserRole.User })
  role?: UserRole
}
