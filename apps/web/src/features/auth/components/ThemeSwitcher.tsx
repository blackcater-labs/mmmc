'use client'

import React from 'react'
import { Button, Skeleton } from '@nextui-org/react'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  if (!mounted)
    return <Skeleton className="rounded-small size-8" />

  return (
    <Button isIconOnly size="sm" onPress={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}>
      {resolvedTheme === 'light' ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}
