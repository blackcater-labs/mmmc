import { NotFoundRoute, Router } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'

import NotFound from './not-found'
import { rootRoute } from './app/route'
import { loginRoute } from './app/(auth)/login/route'
import { homeLayoutRoute, homeRoute } from './app/(home)/route'
import { spaceLayoutRoute } from './app/(home)/space/route'
import { spaceRoute } from './app/(home)/space/$spaceId/route'
import { libraryRoute } from './app/(home)/space/$spaceId/library/$libraryId/route'
import { playlistRoute } from './app/(home)/space/$spaceId/playlist/$playlistId/route'
import { itemRoute } from './app/(home)/space/$spaceId/item/$itemId/route'
import { settingsRoute } from './app/(home)/settings/route'

export const queryClient = new QueryClient()

export {
  rootRoute,
  loginRoute,
  homeLayoutRoute,
  homeRoute,
  spaceLayoutRoute,
  spaceRoute,
  settingsRoute,
}

export const router = new Router({
  routeTree: rootRoute.addChildren([
    loginRoute, // /login
    homeLayoutRoute.addChildren([
      homeRoute, // /
      spaceLayoutRoute.addChildren([
        libraryRoute, // /space/:spaceId/library/:libraryId
        playlistRoute, // /space/:spaceId/playlist/:playlistId
        itemRoute, // /space/:spaceId/item/:itemId
        spaceRoute, // /space/:spaceId
      ]), // /space
      settingsRoute, // /settings
    ]),
  ]),
  notFoundRoute: new NotFoundRoute({
    getParentRoute: () => rootRoute,
    component: NotFound,
  }),
  defaultPreload: 'intent',
  context: { queryClient },
})
