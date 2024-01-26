import type { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod'

import { login } from '@/api/auth/login'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validateFields = loginSchema.safeParse(credentials)

        if (!validateFields.success)
          return null

        const { data, error } = await login(validateFields.data)

        if (error && !data)
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
