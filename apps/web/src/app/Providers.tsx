'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/navigation'

import { Toaster } from '@/components/toaster'

export interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  const router = useRouter()

  return (
    <NextUIProvider locale="en-US" navigate={router.push}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        {children}
        <Toaster />
      </ThemeProvider>
    </NextUIProvider>
  )
}
