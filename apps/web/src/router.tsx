import { RootRoute, Route, Router, lazyRouteComponent } from '@tanstack/react-router'

import RootLayout from './app/layout'

export const rootLayoutRoute = new RootRoute({
  component: RootLayout,
})

export const $authLoginPageRoute = new Route({
  getParentRoute: () => rootLayoutRoute,
  path: '/login',
  component: lazyRouteComponent(() => import('./app/(auth)/login/page')),
})

export const $dashboardLayoutRoute = new Route({
  id: '$dashboard',
  getParentRoute: () => rootLayoutRoute,
  component: lazyRouteComponent(() => import('./app/(dashboard)/layout')),
})

export const $dashboardIndexPageRoute = new Route({
  getParentRoute: () => $dashboardLayoutRoute,
  path: '/',
  component: lazyRouteComponent(() => import('./app/(dashboard)/page')),
})

export const router = new Router({
  routeTree: rootLayoutRoute.addChildren([
    $authLoginPageRoute, // /login
    $dashboardLayoutRoute.addChildren([ // /dashboard
      $dashboardIndexPageRoute, // /dashboard/
    ]),
  ]),
  // notFoundRoute
})
