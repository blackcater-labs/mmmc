import type { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod'

import { login } from '@/api/auth'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export default {
  providers: [
    Credentials({
      async authorize(credentials, _request) {
        const validateFields = loginSchema.safeParse(credentials)

        if (!validateFields.success)
          return null

        const { data, error } = await login(validateFields.data)

        if (error)
          throw new Error(error.message)

        return data
      },
    }),
  ],
} satisfies NextAuthConfig
