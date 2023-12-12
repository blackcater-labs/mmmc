import { Suspense } from 'react'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Outlet } from '@tanstack/react-router'
import { Toaster } from 'sonner'
import { Loader2Icon } from 'lucide-react'

import { ScrollArea } from '@/components/ui/scroll-area'

function RootLayout() {
  return (
    <>
      <ScrollArea className="h-screen w-screen">

        <Suspense fallback={(
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Loader2Icon width="48" height="48" className="animate-spin" />
          </div>
        )}
        >
          <Outlet />
        </Suspense>
      </ScrollArea>
      <Toaster position="bottom-center" />
      {import.meta.env.DEV && <TanStackRouterDevtools position="bottom-right" />}
    </>
  )
}

export default RootLayout
