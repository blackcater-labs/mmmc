import { registerAs } from '@nestjs/config'

export const config = {
  secret: process.env.JWT_SECRET || 'PLEASE INPUT YOUR OWN JWT SECRET',
  expiresIn: process.env.JWT_EXPIRES_IN || '30d',
}
export const register = registerAs('jwt', () => (config))
