import { Route, lazyRouteComponent, redirect } from '@tanstack/react-router'

import { rootRoute } from '@/router'
import { store, userAtom } from '@/store'
import Loading from '@/loading'

export const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/login',
  beforeLoad: ({ location }) => {
    if (store.get(userAtom) && location.href.startsWith('/login'))
      throw redirect({ to: '/' })
  },
  validateSearch: (search): { redirect?: string } => {
    return {
      redirect: search.redirect as string,
    }
  },
  component: lazyRouteComponent(() => import('./page')),
  pendingComponent: Loading,
})
