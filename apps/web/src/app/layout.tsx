import type { Metadata } from 'next'
import { SessionProvider } from 'next-auth/react'

import { Providers } from './Providers'
import './globals.css'
import { auth } from '@/auth'

export const metadata: Metadata = {
  title: 'Mmmc',
  description: 'Self-hosted, open-source, web-based manga, manhua, manhwa, comic, book, novel reader',
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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
