'use client'

import { useTheme } from 'next-themes'
import { IllustrationFailure, IllustrationFailureDark } from '@douyinfe/semi-illustrations'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

export default function NotFoundPage() {
  const { resolvedTheme } = useTheme()

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center">
      {resolvedTheme === 'light'
        ? <IllustrationFailure fill="currentColor" />
        : <IllustrationFailureDark fill="currentColor" />}
      <h5 className="mt-4 text-xl font-bold">Something went wrong!</h5>
      <Link href="/">
        <Button className="mt-2" size="sm" color="primary">
          Go Home
        </Button>
      </Link>
    </div>
  )
}
