export enum BizCode {}

export class BizException {
  code: number
  message: string

  constructor(code: number, message: string) {
    this.code = code
    this.message = message
  }
}
