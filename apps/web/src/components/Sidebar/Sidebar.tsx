import { tm } from '~/utils/tailwind'

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <aside className={tm('bg-background fixed bottom-0 left-0 top-16 z-[5] w-[256px]', className)}>
      Nav
    </aside>
  )
}
