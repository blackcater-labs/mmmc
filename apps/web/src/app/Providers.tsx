'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/navigation'

export interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  const router = useRouter()

  return (
    <NextUIProvider navigate={router.push}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </ThemeProvider>
    </NextUIProvider>
  )
}
