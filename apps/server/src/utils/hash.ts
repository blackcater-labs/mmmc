import crypto from 'node:crypto'

export function md5Hash(str: string) {
  const md5 = crypto.createHash('md5')
  return md5.update(str).digest('hex')
}
