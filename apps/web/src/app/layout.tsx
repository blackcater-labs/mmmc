import type { Metadata } from 'next'

import { Providers } from './Providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mmmc',
  description: 'Self-hosted, open-source, web-based manga, manhua, manhwa, comic, book, novel reader',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
