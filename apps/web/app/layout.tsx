import type { Metadata } from 'next'
import { Providers } from './providers'

import './globals.css'
import { ScrollArea } from '@/components/ui/scroll-area'

export const metadata: Metadata = {
  title: {
    template: '%s | Mmmc - Software for organizing your comics',
    default: 'Mmmc - Software for organizing your comics',
  },
  description: 'Mmmc is a software for organizing your comics',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <ScrollArea className="h-screen w-screen">
            {children}
          </ScrollArea>
        </Providers>
      </body>
    </html>
  )
}
