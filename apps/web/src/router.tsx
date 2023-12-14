import { NotFoundRoute, Router } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'

import { rootRoute } from './app/route'
import { loginRoute } from './app/(auth)/login/route'
import { dashboardLayoutRoute, dashboardRoute } from './app/(dashboard)/route'
import NotFound from './not-found'

export const queryClient = new QueryClient()

export {
  rootRoute,
  loginRoute,
  dashboardLayoutRoute,
  dashboardRoute,
}

export const router = new Router({
  routeTree: rootRoute.addChildren([
    loginRoute, // /login
    dashboardLayoutRoute.addChildren([ // /
      dashboardRoute, // /
    ]),
  ]),
  notFoundRoute: new NotFoundRoute({
    getParentRoute: () => rootRoute,
    component: NotFound,
  }),
  defaultPreload: 'intent',
  context: { queryClient },
})
