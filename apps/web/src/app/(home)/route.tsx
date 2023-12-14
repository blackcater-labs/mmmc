import { Route, lazyRouteComponent, redirect } from '@tanstack/react-router'

import { rootRoute } from '@/router'
import { store, userAtom } from '@/store'
import Loading from '@/loading'

export const homeLayoutRoute = new Route({
  id: '$home',
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

export const homeRoute = new Route({
  path: '/',
  getParentRoute: () => homeLayoutRoute,
  component: lazyRouteComponent(() => import('./page')),
})
