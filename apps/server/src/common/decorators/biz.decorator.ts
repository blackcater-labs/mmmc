import { Reflector } from '@nestjs/core'

interface BizOptions {
  skipInterceptor?: boolean
}

export const Biz = Reflector.createDecorator<BizOptions>()
