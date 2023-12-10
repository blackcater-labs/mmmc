import * as dotenv from 'dotenv'

dotenv.config()

export default () => ({
  port: Number.parseInt(process.env.PORT, 10) || 3000,
})
