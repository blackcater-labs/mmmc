import { registerAs } from '@nestjs/config'

export const config = {
  secret: process.env.JWT_SECRET || 'PLEASE INPUT YOUR OWN JWT SECRET',
  expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  passwordSalt: process.env.JWT_PASSWORD_SALT || 'PLEASE INPUT YOUR OWN JWT PASSWORD SALT',
}
export const register = registerAs('jwt', () => (config))
