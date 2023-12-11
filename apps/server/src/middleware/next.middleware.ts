import { resolve } from 'node:path'
import { Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express'
import next from 'next'

const app = next({
  dev: process.env.NODE_ENV !== 'production',
  dir: resolve(__dirname, '../../../web'),
  customServer: true,
})
const handler = app.getRequestHandler() // FIX: a little hacky
let prepared: boolean = false

@Injectable()
export class NextMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (!prepared) {
      app.prepare().then(() => {
        prepared = true
        handler(req, res)
      })
    }
    else { handler(req, res) }
  }
}
