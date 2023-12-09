'use client'

import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()

  return (
    <main>
      <h2>{t('Welcome to React')}</h2>
    </main>
  )
}
