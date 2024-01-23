import { Elysia } from 'elysia'

import type { AppConfig } from './types'

export async function setup(config: AppConfig) {
  const app = new Elysia()

  return app
}
