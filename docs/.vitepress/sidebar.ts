import type { DefaultTheme } from 'vitepress'
import { Deploys, Guides, Tools } from './nav'

export const SidebarOne: DefaultTheme.SidebarItem[] = [
  {
    text: 'Guides',
    items: Guides,
  },
  {
    text: 'Deploy',
    items: Deploys,
  },
  {
    text: 'Tools',
    items: Tools,
  },
  {
    text: 'OpenAPI',
    link: '/openapi/',
  },
]

export const SidebarOpenAPI: DefaultTheme.SidebarItem[] = [
  {
    text: 'OpenAPI',
    items: [
      { text: 'Overview', link: '/openapi/' },
      { text: 'Authentication', link: '/openapi/auth' },
      { text: 'User', link: '/openapi/user' },
      { text: 'Library', link: '/openapi/library' },
      { text: 'Media', link: '/openapi/media' },
      { text: 'Tag', link: '/openapi/tag' },
      { text: 'Category', link: '/openapi/category' },
      { text: 'Collection', link: '/openapi/collection' },
      { text: 'Statistic', link: '/openapi/statistic' },
    ],
  },
]
