import { Outlet } from '@tanstack/react-router'

import { Sidebar } from './_components/Sidebar'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function SpaceLayoutPage() {
  return (
    <div className="flex min-h-0 flex-1 flex-row">
      <Sidebar />
      <div className="h-full min-w-0 flex-1 overflow-hidden">
        <ScrollArea className="h-full w-full">
          <Outlet />
        </ScrollArea>
      </div>
    </div>
  )
}
