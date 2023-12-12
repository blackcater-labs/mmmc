import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Outlet } from '@tanstack/react-router'
import { Toaster } from 'sonner'

import { ScrollArea } from '@/components/ui/scroll-area'

export default function RootLayout() {
  return (
    <>
      <ScrollArea className="h-screen w-screen">
        <Outlet />
      </ScrollArea>
      <Toaster position="bottom-center" />
      {import.meta.env.DEV && <TanStackRouterDevtools initialIsOpen={false} />}
      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
    </>
  )
}
