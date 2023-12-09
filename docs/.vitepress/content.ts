export interface Integration {
  icon: string
  name: string
  link: string
  target?: string
  secondary?: string
}

export const integrations: Integration[] = [
  { name: 'Synology', link: '/deploy/synology', icon: 'i-simple-icons:synology' },
  { name: 'Docker', link: '/deploy/docker', icon: 'i-mdi:docker' },
  { name: 'Local Device', link: '/deploy/local', icon: 'i-mdi:server' },
]

export interface Tool {
  name: string
  sourceUrl: string
  readUrl: string
  icon?: string
  icons?: string[]
}

export const tools: Tool[] = [
  {
    name: 'Metaorg',
    sourceUrl: 'https://github.com/blackcater-labs/metaorg',
    readUrl: '/tools/metaorg',
    icon: 'i-mdi:table-cog',
  },
]
