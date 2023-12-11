import { BadRequestException, Body, Controller, Post } from '@nestjs/common'
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger'

import { LoginDTO } from './dto/login.dto'
import { RegisterDTO } from './dto/register.dto'
import { AuthService } from './auth.service'
import { LoginRespDTO } from './dto/login-resp.dto'
import { RegisterRespDTO } from './dto/register-resp.dto'

@Controller('/auth')
@ApiTags('Authentication')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  @ApiCreatedResponse({ type: LoginRespDTO })
  async login(@Body() loginDto: LoginDTO): Promise<LoginRespDTO> {
    return this.authService.signIn(loginDto.username, loginDto.password)
  }

  @Post('/register')
  async register(@Body() registerDTO: RegisterDTO): Promise<RegisterRespDTO> {
    const { username, password, passwordConfirm, ...rest } = registerDTO

    if (password !== passwordConfirm)
      throw new BadRequestException('Passwords do not match')

    return this.authService.signUp(username, password, rest)
  }
}
