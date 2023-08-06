import { Catch, HttpException, HttpStatus } from '@nestjs/common'
import type { ArgumentsHost, ExceptionFilter } from '@nestjs/common'
import type { Request, Response } from 'express'
import { logger } from '@/util/logger'
import { BizException, RespResult } from '@/util/error'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const resp: Response = ctx.getResponse()
    const req: Request = ctx.getRequest()

    const url = req.originalUrl
    const statusCode = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR
    const message = exception.message
    const excepResp: any = exception.getResponse()
    const errResp: RespResult = {
      statusCode,
      message,
      success: false,
      data: null,
    }

    if (excepResp instanceof Object) {
      if (Array.isArray(excepResp.message))
        errResp.message = excepResp.message[0]
      errResp.message = errResp.message || excepResp.message || ''
    }

    if (exception instanceof BizException)
      errResp.bizCode = (exception as BizException).getBizCode()
      // errResp.message = errResp.message || BizCodeConstants[errResp.bizCode] || ''

    resp.status(statusCode)
    resp.header('Content-Type', 'application/json; charset=utf-8')
    resp.send(errResp)

    logger.error(`${url}: ${JSON.stringify(errResp)}`)
  }
}