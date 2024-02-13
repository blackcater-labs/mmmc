'use client'

import { ActionIcon, Menu } from '@mantine/core'
import { IconWorld } from '@tabler/icons-react'

import { useChangeLocale } from '~/locales/client'

export function LangSwitcher() {
  const changeLocale = useChangeLocale()

  return (
    <Menu position="bottom-end">
      <Menu.Target>
        <ActionIcon variant="subtle">
          <IconWorld />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          key="zh-CN"
          onClick={() => changeLocale('zh-CN')}
        >
          🇨🇳 简体中文
        </Menu.Item>
        <Menu.Item
          key="en-US"
          onClick={() => changeLocale('en-US')}
        >
          🇺🇸 English
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
