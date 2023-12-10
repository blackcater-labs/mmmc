import { useTranslations } from 'next-intl'

import { LngToggle } from '@/components/LngToggle'

export default function Home() {
  const t = useTranslations('HomePage')

  return (
    <main>
      <h2>{t('h2')}</h2>
      <LngToggle />
    </main>
  )
}
