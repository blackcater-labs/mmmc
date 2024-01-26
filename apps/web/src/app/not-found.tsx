'use client'

import { useTheme } from 'next-themes'
import { IllustrationNotFound, IllustrationNotFoundDark } from '@douyinfe/semi-illustrations'

export default function NotFoundPage() {
  const { resolvedTheme } = useTheme()

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center">
      {resolvedTheme === 'light' ? <IllustrationNotFound /> : <IllustrationNotFoundDark />}
    </div>
  )
}
