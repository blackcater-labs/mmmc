'use client'

import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

import { I18nProviderClient } from '~/locales/client'

export interface ProvidersProps {
  children: React.ReactNode
  params: { locale: string }
}

export function LocaleProviders({ params: { locale }, children }: ProvidersProps) {
  const router = useRouter()

  return (
    <I18nProviderClient locale={locale}>
      <NextUIProvider className="min-h-screen" locale={locale} navigate={router.push}>
        {children}
      </NextUIProvider>
    </I18nProviderClient>
  )
}
