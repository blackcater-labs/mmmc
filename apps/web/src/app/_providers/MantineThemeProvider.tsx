'use client'

import { MantineProvider } from '@mantine/core'
import { useTheme } from 'next-themes'

import { cssVariablesResolver, theme } from '~/theme'

export interface MantineThemeProviderProps {
  children: React.ReactNode
}

export function MantineThemeProvider({ children }: MantineThemeProviderProps) {
  const { resolvedTheme } = useTheme()

  return (
    <MantineProvider
      cssVariablesResolver={cssVariablesResolver}
      defaultColorScheme="auto"
      forceColorScheme={resolvedTheme === 'light' ? 'light' : 'dark'}
      theme={theme}
      withCssVariables
    >
      {children}
    </MantineProvider>
  )
}
