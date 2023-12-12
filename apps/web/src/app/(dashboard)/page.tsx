import { useTranslation } from 'react-i18next'

export default function IndexPage() {
  const { t } = useTranslation('Index')

  return (
    <h1>{t('h1')}</h1>
  )
}
