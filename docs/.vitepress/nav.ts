import type { DefaultTheme } from 'vitepress/types'

export const Guides: DefaultTheme.NavItemWithLink[] = [
  { text: 'Getting Started', link: '/guide/' },
  { text: 'Why Mmmc?', link: '/guide/why' },
]

export const Configs: DefaultTheme.NavItemWithLink[] = [
  { text: 'Overview', link: '/config/' },
]

export const Plugins: DefaultTheme.NavItemWithLink[] = [
  { text: 'IMDB', link: '/plugins/imdb' },
  { text: 'Douban', link: '/plugins/douban' },
]

export const Nav: DefaultTheme.NavItem[] = [
  {
    text: 'Guide',
    items: [
      {
        text: 'Guide',
        items: Guides,
      },
    ],
    activeMatch: '^/guide/',
  },
  {
    text: 'Config',
    items: [
      {
        text: 'Config File',
        link: '/guide/config-file',
      },
      {
        text: 'Concepts',
        items: Configs,
      },
    ],
    activeMatch: '^/config/',
  },
  {
    text: 'Plugins',
    items: [
      {
        text: 'Overview',
        link: '/plugins/',
      },
      {
        text: 'Community Presets',
        link: '/plugins/community',
      },
      {
        text: 'Plugins',
        items: Plugins,
      },
    ],
    activeMatch: '^/plugins/',
  },
]
