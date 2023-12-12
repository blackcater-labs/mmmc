import { BadRequestException, Body, Controller, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { UserEntity } from '../user/entity/user.entity'
import { LoginDTO } from './dto/login.dto'
import { RegisterDTO } from './dto/register.dto'
import { AuthService } from './auth.service'
import { TokenRespDTO } from './dto/token-resp.dto'
import { Public } from './auth.guard'
import { ApiOkResponeCustom } from '@/decorator/swagger.decorator'

@Controller('/auth')
@ApiTags('Authentication')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('/login')
  @ApiOkResponeCustom(TokenRespDTO)
  async login(@Body() loginDto: LoginDTO): Promise<TokenRespDTO> {
    const { access_token, user } = await this.authService.signIn(loginDto.username, loginDto.password)

    return {
      access_token,
      user: new UserEntity(user),
    }
  }

  @Public()
  @Post('/register')
  @ApiOkResponeCustom(TokenRespDTO)
  async register(@Body() registerDTO: RegisterDTO): Promise<TokenRespDTO> {
    const { username, password, passwordConfirm, ...rest } = registerDTO

    if (password !== passwordConfirm)
      throw new BadRequestException('Passwords do not match')

    const { access_token, user } = await this.authService.signUp(username, password, rest)

    return {
      access_token,
      user: new UserEntity(user),
    }
  }
}
