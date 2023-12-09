'use client'

import { ThemeProvider } from 'next-themes'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import resources from '@/i18n'

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}
