'use client'

import { ThemeProvider } from 'next-themes'
import i18n from 'i18next'
import detector from 'i18next-browser-languagedetector'
import backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18n
  .use(detector)
  .use(backend)
  .use(initReactI18next)
  .init({
    debug: true,
    resources: {
      en: {
        translation: {
          'Welcome to React': 'Welcome to React and react-i18next',
        },
      },
    },
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
