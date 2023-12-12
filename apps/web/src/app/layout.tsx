import { Suspense } from 'react'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
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
      {import.meta.env.DEV && <TanStackRouterDevtools position="bottom-right" />}
    </>
  )
}
