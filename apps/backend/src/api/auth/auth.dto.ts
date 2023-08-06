import { IsEmail, IsNotEmpty, IsOptional, IsString, IsUrl, Length } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class LoginDto {
  @ApiProperty()
  @IsNotEmpty()
  username: string

  @ApiProperty()
  @IsString()
  @Length(6, 24)
  @IsNotEmpty()
  password: string
}

export class RegisterDto extends LoginDto {
  @ApiProperty()
  @IsString()
  @Length(6, 24)
  @IsNotEmpty()
  passwordConfirm: string

  @ApiPropertyOptional()
  @IsEmail()
  @IsNotEmpty()
  email: string

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  nickname?: string

  @ApiPropertyOptional()
  @IsUrl()
  @IsOptional()
  avatar?: string
}
