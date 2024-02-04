import type { NextAuthConfig } from 'next-auth'

import Credentials from 'next-auth/providers/credentials'

import { login } from '~/api/auth/login'

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const { data, error } = await login(credentials as any)

        if (error)
          return null

        return {
          id: data?.login.user.id,
          name: data?.login.user.name,
          email: data?.login.user.email,
          role: data?.login.user.role,
          image: data?.login.user.avatar,
          access_token: data?.login.access_token,
        }
      },
    }),
  ],
} satisfies NextAuthConfig
