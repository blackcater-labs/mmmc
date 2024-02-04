import type { Metadata } from 'next'

import { SessionProvider } from 'next-auth/react'

import { auth } from '~/auth'

import { Providers } from './Providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mmmc',
  description: 'Self-hosted, open-source, web-based manga, manhua, manhwa, comic, book, novel reader',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await auth()

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <Providers>{children}</Providers>
        </SessionProvider>
      </body>
    </html>
  )
}
