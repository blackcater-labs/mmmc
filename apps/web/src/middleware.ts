import NextAuth from 'next-auth'
import { NextResponse } from 'next/server'

import authConfig from '@/auth.config'
import { AUTH_API_PREFIXS, AUTH_ROUTES, DEFAULT_REDIRECT_URL, PUBLIC_ROUTES } from '@/routes'

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth
  const isApiPrefix = AUTH_API_PREFIXS.some(prefix => nextUrl.pathname.startsWith(prefix))
  const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname)
  const isAuthRoute = AUTH_ROUTES.includes(nextUrl.pathname)

  if (isApiPrefix)
    return null // skip'

  if (isAuthRoute) {
    if (isLoggedIn)
      return NextResponse.redirect(new URL(DEFAULT_REDIRECT_URL, nextUrl.toString()))
    return null // skip
  }

  // Now, nextUrl must not be an auth route

  if (!isLoggedIn && !isPublicRoute) {
    let redirectUrl = nextUrl.pathname
    if (nextUrl.search)
      redirectUrl += nextUrl.search
    redirectUrl = encodeURIComponent(redirectUrl)

    return NextResponse.redirect(new URL(
      `/auth/login?callbackUrl=${redirectUrl}`,
      nextUrl.toString(),
    ))
  }

  return null
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc|graphql)(.*)'],
}
