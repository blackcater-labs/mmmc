'use client'

import { IllustrationNotFound, IllustrationNotFoundDark } from '@douyinfe/semi-illustrations'
import { Button } from '@mantine/core'
import Link from 'next/link'
import { useTheme } from 'next-themes'

export default function NotFoundPage() {
  const { resolvedTheme } = useTheme()

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center">
      {resolvedTheme === 'light'
        ? <IllustrationNotFound fill="currentColor" />
        : <IllustrationNotFoundDark fill="currentColor" />}
      <h5 className="mt-4 text-xl font-bold">Something went wrong!</h5>
      <Link href="/">
        <Button className="mt-2" size="sm">
          Go Home
        </Button>
      </Link>
    </div>
  )
}
