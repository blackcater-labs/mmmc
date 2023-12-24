import { Route, lazyRouteComponent } from '@tanstack/react-router'

import { spaceLayoutRoute } from '@/router'

export const playlistRoute = new Route({
  path: '/$spaceId/playlist/$playlistId',
  getParentRoute: () => spaceLayoutRoute,
  component: lazyRouteComponent(() => import('./page')),
})
