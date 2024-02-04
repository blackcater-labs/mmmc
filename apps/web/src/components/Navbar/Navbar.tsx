import { tm } from '~/utils/tailwind'

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  return (
    <nav className={tm('bg-background fixed inset-x-0 top-0 z-[5] h-16 p-2', className)}>
      Nav
    </nav>
  )
}
