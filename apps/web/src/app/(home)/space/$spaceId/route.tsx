import { Route, lazyRouteComponent } from '@tanstack/react-router'

import { spaceLayoutRoute } from '@/router'

export const spaceRoute = new Route({
  path: '/$spaceId',
  getParentRoute: () => spaceLayoutRoute,
  component: lazyRouteComponent(() => import('./page')),
})
