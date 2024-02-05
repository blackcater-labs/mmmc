import debug from 'debug'

import { load } from './config'
import { setup } from './setup'

async function bootstrap() {
  const config = load()
  const app = await setup(config)

  debug('mmmc:bootstrap')('Load config: %o', config)

  try {
    await app.listen({ port: config.server.port })
  }
  catch (err) {
    app.log.error(err)
  }
}

bootstrap()
