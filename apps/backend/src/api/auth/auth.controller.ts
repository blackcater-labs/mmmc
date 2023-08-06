import { Body, Controller, Post } from '@nestjs/common'
import { ApiBadRequestResponse, ApiOkResponse, ApiTags, ApiUnauthorizedResponse, getSchemaPath } from '@nestjs/swagger'
import { AuthService } from './auth.service'
import { LoginDto, RegisterDto } from './auth.dto'
import { respSchema } from '@/util/schema'

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @ApiOkResponse({
    schema: respSchema({
      $ref: getSchemaPath(RegisterDto),
    }),
  })
  @ApiBadRequestResponse()
  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    // TODO: Better structure of the response data
    return this.authService.register(registerDto)
  }

  @ApiOkResponse()
  @ApiBadRequestResponse()
  @ApiUnauthorizedResponse()
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto.username, loginDto.password)
  }
}
