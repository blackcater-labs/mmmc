import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  darkMode: 'class',

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {},

  plugins: [
    nextui({
      layout: {
        borderWidth: {
          small: '1px',
          medium: '1px',
          large: '2px',
        },
        radius: {
          small: '4px',
          medium: '8px',
          large: '12px',
        },
      },
      themes: {
        light: {
          layout: {},
          colors: {
            background: '#f4f4f5',
          },
        },
        dark: {
          layout: {},
          colors: {
            background: '#121316',
            content1: '#1a1a1d',
            content2: '#1f1f22',
            content3: '#262628',
            content4: '#303032',
          },
        },
      },
    }),
  ],
}

export default config
