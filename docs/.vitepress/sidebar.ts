import type { DefaultTheme } from 'vitepress'
import { Guides } from './nav'

export const SidebarGuide: DefaultTheme.SidebarItem[] = [
  {
    text: 'Guides',
    items: Guides,
  },
]
