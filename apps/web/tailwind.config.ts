import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'
import { mmmc } from '@mmmc/theme'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    mmmc(),
    animate,
  ],
}

export default config
