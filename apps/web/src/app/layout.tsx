import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Outlet } from '@tanstack/react-router'
import { Toaster } from 'sonner'

export default function RootLayout() {
  return (
    <>
      <Outlet />
      <Toaster position="bottom-center" />
      {import.meta.env.DEV && <TanStackRouterDevtools initialIsOpen={false} />}
      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
    </>
  )
}
