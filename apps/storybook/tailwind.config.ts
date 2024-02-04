import type { Config } from 'tailwindcss'

import { mmmc } from '@mmmc/theme'

const theme: Config = {
  darkMode: ['class'],
  content: [
    './src/**/*.{ts,tsx}',
    '../../apps/web/src/**/*.{ts,tsx}',
    '../../packages/ui/src/**/*.{ts,tsx}',
    '../../node_modules/@nextui-org/theme/dist/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    mmmc(),
  ],
}

export default theme
