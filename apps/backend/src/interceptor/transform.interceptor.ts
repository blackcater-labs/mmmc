import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { map } from 'rxjs/operators'
import type { Observable } from 'rxjs'
import { RespResult } from '@/util/error'
import { logger } from '@/util/logger'

interface Response<T> {
  data: T
}

@Injectable()
export class TransformInterceptor<T>
implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler<T>): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => {
        const ctx = context.switchToHttp()
        const resp = ctx.getResponse()
        const req = ctx.getRequest()

        const url = req.originalUrl
        const statusCode = resp.statusCode
        const res: RespResult = {
          statusCode,
          message: null,
          success: true,
          data,
        }

        logger.log(`${url}: ${JSON.stringify(res)}`, 'Response', 'stack')

        return res
      }),
    )
  }
}
