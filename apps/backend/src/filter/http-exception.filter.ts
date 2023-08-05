import { Catch, HttpException, HttpStatus } from '@nestjs/common'
import type { Request, Response } from 'express'
import type { ArgumentsHost, ExceptionFilter } from '@nestjs/common'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const resp: Response = ctx.getResponse()
    const req: Request = ctx.getRequest()

    const url = req.originalUrl
    const statusCode = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR
    const message = exception.message
    const errorResponse = {
      statusCode,
      message,
      success: false,
      data: null,
    }

    resp.status(statusCode)
    resp.header('Content-Type', 'application/json; charset=utf-8')
    resp.send(errorResponse)
  }
}
