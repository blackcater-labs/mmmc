import type { DefaultTheme } from 'vitepress/types'

type NavItemList = DefaultTheme.NavItemWithChildren['items']

export const Guides: NavItemList = [
  { text: 'Why Mmmc?', link: '/guide/why' },
  { text: 'Getting Started', link: '/guide/' },
]

export const Deploys: NavItemList = [
  { text: 'Overview', link: '/deploy/' },
  {
    text: 'NAS',
    items: [
      { text: 'Synology', link: '/deploy/synology' },
    ],
  },
  { text: 'Use Docker', link: '/deploy/docker' },
  { text: 'From Source', link: '/deploy/local' },
]

export const Tools: NavItemList = [
  { text: 'Overview', link: '/tools/' },
  {
    text: 'Metadata',
    items: [
      { text: 'Metaorg', link: '/tools/metaorg' },
    ],
  },
]

export const Nav: DefaultTheme.NavItem[] = [
  {
    text: 'Guide',
    items: Guides,
    activeMatch: '^/guide/',
  },
  {
    text: 'Deploy',
    items: Deploys,
    activeMatch: '^/deploy/',
  },
  {
    text: 'Tools',
    items: Tools,
    activeMatch: '^/tools/',
  },
  {
    text: 'OpenAPI',
    link: '/openapi/',
    activeMatch: '^/openapi/',
  },
]
