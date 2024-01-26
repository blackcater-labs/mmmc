import NextAuth from 'next-auth'

import authConfig from '@/auth.config'

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
  unstable_update,
} = NextAuth({
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  session: { strategy: 'jwt' },
  callbacks: {
    async session({ token, session }) {
      console.log('session:', token, session)
      return session
    },
    async jwt({ token }) {
      console.log('jwt:', token)
      return token
    },
  },
  ...authConfig,
})
