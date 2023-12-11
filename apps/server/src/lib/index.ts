import crypto from 'node:crypto'

export const isDev = process.env.NODE_ENV === 'development'
export const isProd = process.env.NODE_ENV === 'production'

export function md5Hash(str: string) {
  const md5 = crypto.createHash('md5')
  return md5.update(str).digest('hex')
}
