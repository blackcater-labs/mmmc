import { BookIcon, BookImageIcon, CheckIcon, ChevronsUpDownIcon, LibraryIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ScrollArea } from '@/components/ui/scroll-area'

export function Sidebar() {
  return (
    <aside className="flex w-[266px] shrink-0 flex-col border-r bg-background py-4">
      <div className="p-3">
        <div className="mb-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                role="combobox"
                className="flex w-full justify-between text-xl font-semibold"
              >
                Mmmc
                <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 rotate-90 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search Space..." className="h-9" />
                <CommandEmpty>No space found.</CommandEmpty>
                <CommandGroup>
                  <CommandItem value="abc">
                    Mmmc
                    <CheckIcon className="ml-auto h-4 w-4" />
                  </CommandItem>
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-1">
          <Button variant="secondary" className="w-full justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
            Listen Now
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4"
            >
              <rect width="7" height="7" x="3" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="14" rx="1" />
              <rect width="7" height="7" x="3" y="14" rx="1" />
            </svg>
            Browse
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4"
            >
              <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
              <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
              <circle cx="12" cy="12" r="2" />
              <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
              <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
            </svg>
            Radio
          </Button>
        </div>
      </div>
      <ScrollArea className="w-full flex-1">
        <div className="p-3">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Libraries
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <BookIcon className="mr-2 h-4 w-4" />
              Books
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <BookImageIcon className="mr-2 h-4 w-4" />
              Comics
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <LibraryIcon className="mr-2 h-4 w-4" />
              Novel
            </Button>
          </div>
        </div>
        <div className="p-3">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Playlists
          </h2>
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start font-normal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="M21 15V6" />
                <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                <path d="M12 12H3" />
                <path d="M16 6H3" />
                <path d="M12 18H3" />
              </svg>
              Mature like
            </Button>
          </div>
        </div>
      </ScrollArea>
    </aside>
  )
}
