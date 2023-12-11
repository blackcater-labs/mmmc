import { AtomIcon, BracesIcon, BugIcon, CableIcon, DatabaseIcon, Loader2Icon, PackageIcon, PlayIcon, PowerIcon, TerminalSquareIcon } from 'lucide-react'

import { Outlet } from '@tanstack/react-router'
import { Header } from './_components/Header'
import { Button } from '@/components/ui/button'

export default function $DashboardLayout() {
  return (
    <>
      <Header />
      <main className="container mt-[54px]">
        {/* Play */}
        <Button className="" variant="ghost">
          <PlayIcon className="mr-2 h-4 w-4" />
          Start
        </Button>
        {/* Power */}
        <Button className="" variant="ghost">
          <PowerIcon className="mr-2 h-4 w-4" />
          Stop
        </Button>
        {/* Loader */}
        <Button className="" variant="ghost">
          <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
          Loader
        </Button>
        {/* Storage */}
        <Button className="" variant="ghost">
          <DatabaseIcon className="mr-2 h-4 w-4" />
          Storage
        </Button>
        {/* Config */}
        <Button className="" variant="ghost">
          <BracesIcon className="mr-2 h-4 w-4" />
          Config
        </Button>
        {/* Plugins */}
        <Button className="" variant="ghost">
          <PackageIcon className="mr-2 h-4 w-4" />
          Plugins
        </Button>
        {/* Graph */}
        <Button className="" variant="ghost">
          <AtomIcon className="mr-2 h-4 w-4" />
          Graph
        </Button>
        {/* Log */}
        <Button className="" variant="ghost">
          <TerminalSquareIcon className="mr-2 h-4 w-4" />
          Log
        </Button>
        {/* Audit */}
        <Button className="" variant="ghost">
          <BugIcon className="mr-2 h-4 w-4" />
          Audit
        </Button>
        {/* Progess */}
        <Button className="" variant="ghost">
          <CableIcon className="mr-2 h-4 w-4" />
          Progress
        </Button>
        <Outlet />
      </main>
    </>
  )
}
