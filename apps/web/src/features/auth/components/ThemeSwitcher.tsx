'use client'

import { ActionIcon, Skeleton } from '@mantine/core'
import { IconMoon, IconSun } from '@tabler/icons-react'
import { useTheme } from 'next-themes'
import React from 'react'

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  if (!mounted)
    return <Skeleton height={28} width={28} />

  return (
    <ActionIcon
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      variant="subtle"
    >
      {resolvedTheme === 'light' ? <IconSun /> : <IconMoon />}
    </ActionIcon>
  )
}
