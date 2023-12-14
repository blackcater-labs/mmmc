import { Route, lazyRouteComponent } from '@tanstack/react-router'
import { homeLayoutRoute } from '../route'

export const settingsRoute = new Route({
  path: '/settings',
  getParentRoute: () => homeLayoutRoute,
  component: lazyRouteComponent(() => import('./page')),
})
