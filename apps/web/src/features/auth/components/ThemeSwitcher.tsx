'use client'

import { Button, Skeleton } from '@nextui-org/react'
import { IconMoon, IconSun } from '@tabler/icons-react'
import { useTheme } from 'next-themes'
import React from 'react'

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  if (!mounted)
    return <Skeleton className="rounded-small size-8" />

  return (
    <Button isIconOnly onPress={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')} size="sm">
      {resolvedTheme === 'light' ? <IconSun /> : <IconMoon />}
    </Button>
  )
}
