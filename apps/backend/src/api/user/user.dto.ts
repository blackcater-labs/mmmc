import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsString } from 'class-validator'
import { Exclude } from 'class-transformer'

export class UserDto {
  constructor(partial: Partial<UserDto>) {
    Object.assign(this, partial)
  }

  @Exclude()
  id: number

  @ApiProperty()
  userId: string

  @Exclude()
  createdAt: Date

  @Exclude()
  updatedAt: Date

  @ApiProperty()
  username: string

  @Exclude()
  password: string

  @ApiProperty()
  email: string

  @ApiProperty()
  nickname: string

  @ApiProperty()
  avatar: string

  @ApiProperty()
  bio: string

  @ApiProperty({ enum: ['Admin', 'User'] })
  role: string
}

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
