import { ApiProperty } from '@nestjs/swagger'
import { User } from '@prisma/client'
import { Exclude } from 'class-transformer'

export enum UserRole {
  Admin = 1,
  User = 2,
}

export class UserEntity implements User {
  @ApiProperty({ description: 'User ID' })
  id: number

  @ApiProperty({ description: 'Username' })
  username: string

  @Exclude()
  password: string

  @ApiProperty({ description: 'User role' })
  role: UserRole

  @Exclude()
  createdAt: Date

  @Exclude()
  updatedAt: Date

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial)
  }
}
