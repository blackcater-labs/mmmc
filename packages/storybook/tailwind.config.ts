import type { Config } from 'tailwindcss'
import { mmmc } from '@mmmc/theme'

const theme: Config = {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../../apps/web/src/**/*.{js,jsx,ts,tsx}',
    '../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    mmmc(),
  ],
}

export default theme
