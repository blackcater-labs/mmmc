'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'

export interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemeProvider
      attribute="data-mantine-color-scheme"
      defaultTheme="dark"
      enableSystem={false}
    >
      {children}
    </NextThemeProvider>
  )
}
