import { NotFoundRoute, RootRoute, Route, Router, redirect } from '@tanstack/react-router'
import loadable from '@loadable/component'

import RootLayout from '@/app/layout'
import NotFound from '@/not-found'
import Loading from '@/loading'
import { getAccessToken } from '@/lib/localStorage'

export const rootLayoutRoute = new RootRoute({
  component: RootLayout,
})

export const $authLoginPageRoute = new Route({
  getParentRoute: () => rootLayoutRoute,
  path: '/login',
  component: loadable(() => import('./app/(auth)/login/page'), {
    fallback: <Loading />,
  }) as any,
})

export const $dashboardLayoutRoute = new Route({
  id: '$dashboard',
  getParentRoute: () => rootLayoutRoute,
  beforeLoad: ({ location }) => {
    if (!getAccessToken())
      throw redirect({ to: '/login', search: { redirect: location.href } })
  },
  component: loadable(() => import('./app/(dashboard)/layout'), {
    fallback: <Loading />,
  }) as any,
})

export const $dashboardIndexPageRoute = new Route({
  getParentRoute: () => $dashboardLayoutRoute,
  path: '/',
  component: loadable(() => import('./app/(dashboard)/page')) as any,
})

export const router = new Router({
  routeTree: rootLayoutRoute.addChildren([
    $authLoginPageRoute, // /login
    $dashboardLayoutRoute.addChildren([ // /dashboard
      $dashboardIndexPageRoute, // /dashboard/
    ]),
  ]),
  notFoundRoute: new NotFoundRoute({
    getParentRoute: () => rootLayoutRoute,
    component: NotFound,
  }),
})
