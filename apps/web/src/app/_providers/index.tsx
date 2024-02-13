'use client'

import { Toaster } from '~/components/ui/toaster'

import { MantineThemeProvider } from './MantineThemeProvider'
import { ThemeProvider } from './ThemeProvider'

export interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      <MantineThemeProvider>
        {children}
        <Toaster />
      </MantineThemeProvider>
    </ThemeProvider>
  )
}
