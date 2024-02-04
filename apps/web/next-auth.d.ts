import type { UserRole } from '@mmmc/lens/server'
import type { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface User {
    access_token?: null | string
    email?: null | string
    id?: string
    image?: null | string
    name?: null | string
    role?: UserRole | null
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    access_token?: null | string
    email?: null | string
    exp?: number
    iat?: number

    id?: string
    image?: null | string
    jti?: string
    name?: null | string
    picture?: null | string
    role?: UserRole | null
    sub?: string
  }
}
