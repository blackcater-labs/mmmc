import { Route, lazyRouteComponent } from '@tanstack/react-router'

import { homeLayoutRoute } from '../route'

export const spaceLayoutRoute = new Route({
  path: '/space',
  getParentRoute: () => homeLayoutRoute,
  component: lazyRouteComponent(() => import('./layout')),
})
