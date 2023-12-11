import { RootRoute, Route, Router } from '@tanstack/react-router'

import RootLayout from './app/layout'
import $AuthLoginPage from './app/(auth)/login/page'
import $DashboardLayout from './app/(dashboard)/layout'
import $DashboardIndexPage from './app/(dashboard)/page'

export const rootLayoutRoute = new RootRoute({
  component: RootLayout,
})

export const $authLoginPageRoute = new Route({
  getParentRoute: () => rootLayoutRoute,
  path: '/login',
  component: $AuthLoginPage,
})

export const $dashboardLayoutRoute = new Route({
  id: '$dashboard',
  getParentRoute: () => rootLayoutRoute,
  component: $DashboardLayout,
})

export const $dashboardIndexPageRoute = new Route({
  getParentRoute: () => $dashboardLayoutRoute,
  path: '/',
  component: $DashboardIndexPage,
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
