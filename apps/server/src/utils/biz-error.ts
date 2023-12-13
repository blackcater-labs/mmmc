import { I18nContext } from 'nestjs-i18n'
import { I18nPath } from '@/generated/i18n.generated'

export enum BizCode {}

const bizCodeMap: Record<BizCode, I18nPath> = {}

export class BizException {
  code: number
  message: string

  constructor(code: BizCode) {
    this.code = code
    this.message = I18nContext.current().t(bizCodeMap[code])
  }
}
