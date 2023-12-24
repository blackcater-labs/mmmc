import { Route, lazyRouteComponent } from '@tanstack/react-router'

import { spaceLayoutRoute } from '@/router'

export const libraryRoute = new Route({
  path: '/$spaceId/library/$libraryId',
  getParentRoute: () => spaceLayoutRoute,
  component: lazyRouteComponent(() => import('./page')),
})
