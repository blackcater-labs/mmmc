import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials, request) {
        // TODO: Get user from backend
        return {}
      },
    }),
  ],
})
