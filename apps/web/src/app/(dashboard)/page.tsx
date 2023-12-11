import { useTranslation } from 'react-i18next'

function IndexPage() {
  const { t } = useTranslation('Index')

  return (
    <h1>{t('h1')}</h1>
  )
}

export default IndexPage
