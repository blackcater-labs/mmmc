import type { HttpExceptionOptions } from '@nestjs/common'
import { HttpException, HttpStatus } from '@nestjs/common'

export interface RespResult<T = any> {
  statusCode: number
  bizCode?: number
  message: string | null
  success: boolean
  data: T | null
}

export class BizException extends HttpException {
  private readonly bizCode: number

  constructor(response: string | Record<string, any>, bizCode: number, status: number, options?: HttpExceptionOptions) {
    super(response, status, options)
    this.bizCode = bizCode
  }

  getBizCode(): number {
    return this.bizCode
  }
}

export class BizNormalException extends BizException {
  constructor(response: string | Record<string, any>, bizCode: number, options?: HttpExceptionOptions) {
    super(response, bizCode, HttpStatus.OK, options)
  }
}
