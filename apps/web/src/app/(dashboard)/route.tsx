import { Route, lazyRouteComponent, redirect } from '@tanstack/react-router'

import { rootRoute } from '@/router'
import { store, userAtom } from '@/store'
import Loading from '@/loading'

export const dashboardLayoutRoute = new Route({
  id: '$dashboard',
  getParentRoute: () => rootRoute,
  beforeLoad: ({ location }) => {
    if (!store.get(userAtom)) {
      if (!location.href.startsWith('/login'))
        throw redirect({ to: '/login', search: { redirect: location.href } })
    }
  },
  component: lazyRouteComponent(() => import('./layout')),
  pendingComponent: Loading,
})

export const dashboardRoute = new Route({
  getParentRoute: () => dashboardLayoutRoute,
  path: '/',
  component: lazyRouteComponent(() => import('./page')),
})
