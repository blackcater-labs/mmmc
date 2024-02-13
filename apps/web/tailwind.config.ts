import type { Config } from 'tailwindcss'

const config: Config = {
  corePlugins: {
    preflight: false,
  },
  darkMode: ['class', '[data-mantine-color-scheme="dark"]'],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1408px',
    },
    extend: {},
  },
  plugins: [],
}

export default config
