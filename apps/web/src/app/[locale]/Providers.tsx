'use client'

import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

import { I18nProviderClient } from '@/locales/client'

export interface ProvidersProps {
  params: { locale: string }
  children: React.ReactNode
}

export function LocaleProviders({ params: { locale }, children }: ProvidersProps) {
  const router = useRouter()

  return (
    <I18nProviderClient locale={locale}>
      <NextUIProvider locale={locale} navigate={router.push} className="min-h-screen">
        {children}
      </NextUIProvider>
    </I18nProviderClient>
  )
}
