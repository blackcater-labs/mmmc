import { HttpException, type HttpExceptionOptions, HttpStatus } from '@nestjs/common'
import bizCodeConstants from '@/constant/biz-code.constant'

export interface RespResult<T = any> {
  statusCode: number
  bizCode?: number
  message: string | null
  success: boolean
  data: T | null
}

export class BizException extends HttpException {
  private readonly bizCode: number

  constructor(bizCode: number, status: number, options?: HttpExceptionOptions)
  constructor(bizCode: number, response: string | Record<string, any>, status: number, options?: HttpExceptionOptions)
  constructor(bizCode: number, response: any, status: any, options?: HttpExceptionOptions) {
    if (typeof response === 'number') {
      status = response
      response = ''
    }
    response = response || bizCodeConstants[bizCode] || ''
    super(response, status, options)
    this.bizCode = bizCode
  }

  getBizCode(): number {
    return this.bizCode
  }
}

export class BizNormalException extends BizException {
  constructor(bizCode: number, options?: HttpExceptionOptions)
  constructor(bizCode: number, response: any, options?: HttpExceptionOptions) {
    if (typeof response === 'object') {
      options = response
      response = ''
    }
    super(bizCode, response, HttpStatus.OK, options)
  }
}

export class BizBadRequestException extends BizException {
  constructor(bizCode: number, options?: HttpExceptionOptions)
  constructor(bizCode: number, response: any, options?: HttpExceptionOptions) {
    if (typeof response === 'object') {
      options = response
      response = ''
    }
    super(bizCode, response, HttpStatus.BAD_REQUEST, options)
  }
}

export class BizUnauthorizedException extends BizException {
  constructor(bizCode: number, options?: HttpExceptionOptions)
  constructor(bizCode: number, response: any, options?: HttpExceptionOptions) {
    if (typeof response === 'object') {
      options = response
      response = ''
    }
    super(bizCode, response, HttpStatus.UNAUTHORIZED, options)
  }
}

export class BizForbiddenException extends BizException {
  constructor(bizCode: number, options?: HttpExceptionOptions)
  constructor(bizCode: number, response: any, options?: HttpExceptionOptions) {
    if (typeof response === 'object') {
      options = response
      response = ''
    }
    super(bizCode, response, HttpStatus.FORBIDDEN, options)
  }
}
