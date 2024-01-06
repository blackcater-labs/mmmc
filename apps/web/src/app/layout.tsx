import type { Metadata } from 'next'

import { Providers } from './Providers'
import { Toaster } from '@/components/Toaster'
import './globals.css'

export const metadata: Metadata = {
  title: 'Krawl',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <Providers>
          {children}
        </Providers>
        <Toaster />
      </body>
    </html>
  )
}
