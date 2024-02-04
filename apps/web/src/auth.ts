import type { Session } from 'next-auth'
import type { JWT } from 'next-auth/jwt'

import NextAuth from 'next-auth'

import authConfig from '~/auth.config'

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
    async jwt({ token, user }) {
      if (user)
        return { ...token, ...user, picture: user.image }

      return token
    },

    // @ts-expect-error-next-line
    async session({ token, session }: { session: Session, token: JWT }) {
      if (session.user) {
        session.user.id = session.user?.id || token.id
        session.user.name = session.user?.name || token.name
        session.user.email = session.user?.email || token.email
        session.user.image = session.user?.image || token.image
        session.user.role = session.user?.role || token.role
        session.user.access_token = session.user?.access_token || token.access_token
      }

      return session
    },
  },
  ...authConfig,
})
