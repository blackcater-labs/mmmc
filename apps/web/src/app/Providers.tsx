'use client'

import { ThemeProvider } from 'next-themes'

import { Toaster } from '~/components/ui/toaster'

export interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
      <Toaster />
    </ThemeProvider>
  )
}
