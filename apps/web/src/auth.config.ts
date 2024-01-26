import type { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export default {
  providers: [
    Credentials({
      async authorize(credentials, request) {
        console.log('authorize:', credentials, request)
        return {}
      },
    }),
  ],
} satisfies NextAuthConfig

/**
 * Pages do not need to be authenticated
 */
export const PUBLIC_ROUTES: string[] = []

/**
 * Auth related pages
 */
export const AUTH_ROUTES: string[] = [
  '/auth/login',
  '/auth/register',
  '/auth/error',
]

/**
 * Routes that start with this prefix are used for API services
 */
export const AUTH_API_PREFIXS: string[] = [
  '/api',
]

/**
 * Default redirect URL after login
 */
export const DEFAULT_REDIRECT_URL: string = '/'
