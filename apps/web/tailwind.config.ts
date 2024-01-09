import type { Config } from 'tailwindcss'
import { colors, nextui } from '@nextui-org/react'

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
          small: '0',
          medium: '0',
          large: '0',
        },
        radius: {
          small: '4px',
          medium: '8px',
          large: '12px',
        },
        boxShadow: {
          small: '0 0 0 1px hsla(0, 0%, 100%, 0.145), 0 4px 6px rgba(0, 0, 0, 0.04)',
          medium: '0 0 0 1px hsla(0, 0%, 100%, 0.145), 0 4px 6px rgba(0, 0, 0, 0.04)',
          large: '0 0 0 1px hsla(0, 0%, 100%, 0.145), 0 4px 6px rgba(0, 0, 0, 0.04)',
        },
      },
    }),
  ],
}

export default config
