import debug from 'debug'

import { load } from './config'
import { setup } from './setup'

const d = debug('mmmc:bootstrap')

async function bootstrap() {
  const config = load()
  const app = await setup(config)

  d('Mmmc Config: %o', config)

  app.listen(config.server.port)
}

bootstrap()
