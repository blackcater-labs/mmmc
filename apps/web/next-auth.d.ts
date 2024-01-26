import type { JWT } from 'next-auth/jwt'

import type { UserRole } from '@/types/gql'

declare module 'next-auth' {
  interface User {
    id?: string
    name?: string | null
    email?: string | null
    image?: string | null
    role?: UserRole | null
    access_token?: string | null
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id?: string
    image?: string | null
    role?: UserRole | null
    access_token?: string | null

    name?: string | null
    email?: string | null
    picture?: string | null
    sub?: string
    iat?: number
    exp?: number
    jti?: string
  }
}
