'use client'

import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation('home')

  return (
    <main>
      <h2>{t('h2')}</h2>
    </main>
  )
}
