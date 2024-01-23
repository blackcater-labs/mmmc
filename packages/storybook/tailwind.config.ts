import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'
import { mmmc } from '@mmmc/theme'

const theme: Config = {
  darkMode: ['class'],
  content: [
    '../ui/src/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    mmmc(),
    animate,
  ],
}

export default theme
