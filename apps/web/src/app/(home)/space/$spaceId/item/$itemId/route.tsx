import { Route, lazyRouteComponent } from '@tanstack/react-router'

import { spaceLayoutRoute } from '@/router'

export const itemRoute = new Route({
  path: '/$spaceId/item/$itemId',
  getParentRoute: () => spaceLayoutRoute,
  component: lazyRouteComponent(() => import('./page')),
})
