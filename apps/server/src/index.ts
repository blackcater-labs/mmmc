import debug from 'debug'

import { load } from './config'
import { setup } from './setup'
import { createLogger } from './utils/log'

const d = debug('mmmc:bootstrap')

async function bootstrap() {
  const config = load()
  const logger = createLogger()
  const app = await setup(config)

  d('Mmmc Config: %o', config)

  app.listen(config.server.port)

  logger.info(`Server listening on http://localhost:${config.server.port}`)
}

bootstrap()
