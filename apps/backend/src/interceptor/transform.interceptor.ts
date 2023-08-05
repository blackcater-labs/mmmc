import {
  Injectable,
} from '@nestjs/common'
import type {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
} from '@nestjs/common'
import { map } from 'rxjs/operators'
import type { Observable } from 'rxjs'

interface Response<T> {
  data: T
}

@Injectable()
export class TransformInterceptor<T>
implements NestInterceptor<T, Response<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => {
        const ctx = context.switchToHttp()
        const response = ctx.getResponse()

        const statusCode = response.statusCode
        const res = {
          statusCode,
          message: null,
          success: true,
          data,
        }

        return res
      }),
    )
  }
}
