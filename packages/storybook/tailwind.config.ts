import type { Config } from 'tailwindcss'

const theme: Config = {
  darkMode: ['class'],
  content: [
    '../ui/src/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default theme
