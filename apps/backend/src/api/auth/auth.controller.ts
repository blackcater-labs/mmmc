import { Body, ClassSerializerInterceptor, Controller, HttpCode, HttpStatus, Post, UseInterceptors } from '@nestjs/common'
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse, getSchemaPath } from '@nestjs/swagger'
import { UserDto } from '../user/user.dto'
import { AuthService } from './auth.service'
import { AuthDto, LoginDto, RegisterDto } from './auth.dto'
import { respSchema } from '@/util/schema'

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: 'Register a new user' })
  @ApiCreatedResponse({ schema: respSchema({ $ref: getSchemaPath(UserDto) }) })
  @ApiBadRequestResponse()
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('signup')
  async signup(@Body() registerDto: RegisterDto) {
    return new UserDto(await this.authService.register(registerDto))
  }

  @ApiOperation({ summary: 'Login by username and password' })
  @ApiOkResponse({ schema: respSchema({ $ref: getSchemaPath(AuthDto) }) })
  @ApiBadRequestResponse()
  @ApiUnauthorizedResponse()
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto.username, loginDto.password)
  }
}
