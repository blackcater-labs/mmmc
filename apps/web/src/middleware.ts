import { NextResponse } from 'next/server'
import NextAuth from 'next-auth'
import { createI18nMiddleware } from 'next-international/middleware'

import authConfig from '~/auth.config'
import {
  AUTH_API_PREFIXS,
  AUTH_ROUTES,
  DEFAULT_LOCALE,
  DEFAULT_REDIRECT_URL,
  PUBLIC_ROUTES,
  SUPPORTED_LOCALES,
} from '~/constants'

const { auth } = NextAuth(authConfig)
const i18nMiddleware = createI18nMiddleware({
  locales: SUPPORTED_LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  urlMappingStrategy: 'rewrite',
})

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth
  const isApiPrefix = AUTH_API_PREFIXS.some(prefix => nextUrl.pathname.startsWith(prefix))
  const isI18nPrefix = SUPPORTED_LOCALES.some(locale => nextUrl.pathname.startsWith(`/${locale}`))
  const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname)
  const isAuthRoute = AUTH_ROUTES.includes(nextUrl.pathname)

  // i18n routes should be `rewrited` by i18nMiddleware
  if (isI18nPrefix)
    return i18nMiddleware(req)

  // API related routes shouldn't be handled by middleware
  if (isApiPrefix)
    return null // skip'

  if (isAuthRoute) {
    if (isLoggedIn)
      return NextResponse.redirect(new URL(DEFAULT_REDIRECT_URL, nextUrl.toString()))
    return i18nMiddleware(req)
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

  return i18nMiddleware(req)
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc|graphql)(.*)'],
}
