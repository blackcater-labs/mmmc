import { SearchBar } from './SearchBar'
import { LngToggle } from '@/components/LngToggle'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Separator } from '@/components/ui/separator'

export function Header() {
  return (
    <header className="h-[54px] shrink-0 border-b bg-background">
      <div className="flex h-full items-center justify-between px-6">
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
