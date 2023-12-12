import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { Observable, catchError, map, of } from 'rxjs'

import { BizException } from '@/utils/biz-error'

@Injectable()
export class BizInterceptor implements NestInterceptor {
  intercept(_context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle()
      .pipe(
        map(data => ({ success: true, data })),
        catchError((err) => {
          if (err instanceof BizException)
            return of({ success: false, code: err.code, message: err.message })

          throw err
        }),
      )
  }
}
