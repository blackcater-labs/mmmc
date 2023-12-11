import { SearchBar } from './SearchBar'
import { LngToggle } from '@/components/LngToggle'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Separator } from '@/components/ui/separator'

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0  h-[54px] border-b border-border bg-card shadow">
      <div className="container flex h-full items-center justify-between">
        <div>
          {/* Search */}
          <SearchBar />
        </div>
        <div className="flex items-center space-x-2">

          <Separator className="h-6" orientation="vertical" />
          {/* Lang */}
          <LngToggle />
          {/* Theme */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
