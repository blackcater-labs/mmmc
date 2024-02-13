import type { Metadata } from 'next'

import { ColorSchemeScript } from '@mantine/core'
import '@mantine/core/styles.css'
import { SessionProvider } from 'next-auth/react'

import { auth } from '~/auth'

import { Providers } from './_providers'
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
      <head>
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <link href="/site.webmanifest" rel="manifest" />
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          name="viewport"
        />
        <ColorSchemeScript />
      </head>
      <body>
        <SessionProvider session={session}>
          <Providers>{children}</Providers>
        </SessionProvider>
      </body>
    </html>
  )
}
