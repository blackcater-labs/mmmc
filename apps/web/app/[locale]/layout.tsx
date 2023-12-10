import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Providers } from './providers'
import { ScrollArea } from '@/components/ui/scroll-area'
import { locales } from '@/i18n/config'

import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Mmmc - Software for organizing your comics',
    default: 'Mmmc - Software for organizing your comics',
  },
  description: 'Mmmc is a software for organizing your comics',
}

interface RootLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export default function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  if (!locales.includes(locale))
    notFound()

  return (
    <html lang={locale} className="dark">
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
