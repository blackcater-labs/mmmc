import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  username: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string

  @ApiProperty()
  @IsString()
  nickname?: string

  @ApiProperty()
  @IsString()
  avatar?: string

  @ApiProperty()
  @IsString()
  bio?: string

  @ApiProperty()
  @IsString()
  role?: string
}
