'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/navigation'

import { Toaster } from '@/components/toaster'
import { I18nProviderClient } from '@/locales/client'

export interface ProvidersProps {
  params: { locale: string }
  children: React.ReactNode
}

export function Providers({ params: { locale }, children }: ProvidersProps) {
  const router = useRouter()

  return (
    <I18nProviderClient locale={locale}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <NextUIProvider locale={locale} navigate={router.push}>
          {children}
          <Toaster />
        </NextUIProvider>
      </ThemeProvider>
    </I18nProviderClient>
  )
}
