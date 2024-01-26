import type { Metadata } from 'next'
import { SessionProvider } from 'next-auth/react'

import { Providers } from './Providers'
import './globals.css'
import { auth } from '@/auth'

export const metadata: Metadata = {
  title: 'Mmmc',
  description: 'Self-hosted, open-source, web-based manga, manhua, manhwa, comic, book, novel reader',
}

interface RootLayoutProps {
  params: {
    locale: string
  }
  children: React.ReactNode
}

export default async function RootLayout({ params, children }: RootLayoutProps) {
  const session = await auth()

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <Providers params={params}>{children}</Providers>
        </SessionProvider>
      </body>
    </html>
  )
}
