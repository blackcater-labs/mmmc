import { config } from 'dotenv'

config()

export default () => ({
  PORT: Number.parseInt(process.env.PORT, 10) || 3000,

  SALT_PWD: process.env.SALT_PWD || 'Mmmc',

  SECRET_JWT: process.env.SECRET_JWT || 'Mmmc',
})
