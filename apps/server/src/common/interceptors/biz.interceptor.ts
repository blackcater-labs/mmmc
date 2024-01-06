import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Observable, catchError, map, of } from 'rxjs'

import { Biz } from '@/common/decorators/biz.decorator'
import { BizException } from '@/utils/biz'

@Injectable()
export class BizInterceptor implements NestInterceptor {
  constructor(private reflector: Reflector) {}

  intercept(host: ExecutionContext, next: CallHandler): Observable<any> {
    if (host.getType() !== 'http')
      return next.handle()

    const options = this.reflector.get(Biz, host.getHandler())

    return next.handle()
      .pipe(
        map(data => (!options?.skipInterceptor ? ({ success: true, data }) : data)),
        catchError((err) => {
          if (err instanceof BizException && !options?.skipInterceptor)
            return of({ success: false, code: err.code, message: err.message })

          throw err
        }),
      )
  }
}
