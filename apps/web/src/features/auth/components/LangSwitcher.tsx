import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import { GlobeIcon } from 'lucide-react'

export function LangSwitcher() {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Button isIconOnly size="sm">
          <GlobeIcon />
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem>🇨🇳 简体中文</DropdownItem>
        <DropdownItem>🇺🇸 English</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
