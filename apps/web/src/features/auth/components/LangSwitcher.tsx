'use client'

import type { Selection } from '@nextui-org/react'

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import { IconWorld } from '@tabler/icons-react'
import { useCallback } from 'react'

import { useChangeLocale, useCurrentLocale } from '~/locales/client'

export function LangSwitcher() {
  const changeLocale = useChangeLocale()
  const currentLocale = useCurrentLocale()

  const onSelectionChange = useCallback((keys: Selection) => {
    if (keys === 'all')
      return
    if (keys.size === 0)
      return
    changeLocale(keys.values().next().value)
  }, [changeLocale])

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Button isIconOnly size="sm">
          <IconWorld />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        onSelectionChange={onSelectionChange}
        selectedKeys={[currentLocale]}
        selectionMode="single"
      >
        <DropdownItem key="zh-CN">🇨🇳 简体中文</DropdownItem>
        <DropdownItem key="en-US">🇺🇸 English</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
