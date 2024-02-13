'use client'

import { I18nProviderClient } from '~/locales/client'

export interface ProvidersProps {
  children: React.ReactNode
  params: { locale: string }
}

export function LocaleProviders({ params: { locale }, children }: ProvidersProps) {
  return (
    <I18nProviderClient locale={locale}>
      {children}
    </I18nProviderClient>
  )
}
