import { useNavigate } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

import { AspectRatio } from './components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import emptyImg from '@/assets/png/empty.png'

export default function NotFound() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-12 pb-32">
      <div className="w-full max-w-[480px]">
        <AspectRatio ratio={6 / 5}>
          <img className="h-full w-full" src={emptyImg} alt="not found" />
        </AspectRatio>
      </div>
      <h1 className="my-4 text-2xl font-semibold">{t('message')}</h1>
      <Button onClick={() => navigate({ to: '/' })}>{t('go-home')}</Button>
    </main>
  )
}
