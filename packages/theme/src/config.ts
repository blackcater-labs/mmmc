import type { MmmcPluginConfig } from './types'
import { commonColors } from './colors'

export const defaultConfig: MmmcPluginConfig = {
  addCommonColors: false,
  prefix: 'mmmc',
  themes: {
    light: {
      extend: 'light',
      colors: {
        background: commonColors.gray[50],
        foreground: commonColors.gray[900],

        divider: commonColors.gray[300],
        content1: commonColors.white,
        content2: commonColors.gray[100],
        content3: commonColors.gray[150],
        content4: commonColors.gray[200],

        default: {
          50: commonColors.gray[50],
          100: commonColors.gray[100],
          200: commonColors.gray[200],
          300: commonColors.gray[300],
          400: commonColors.gray[400],
          500: commonColors.gray[500],
          600: commonColors.gray[600],
          700: commonColors.gray[700],
          800: commonColors.gray[800],
          900: commonColors.gray[900],
          DEFAULT: commonColors.gray[150],
        },
      },
    },
    dark: {
      extend: 'dark',
      colors: {
        background: commonColors.neutral[950],
        foreground: commonColors.gray[100],

        divider: commonColors.neutral[700],
        content1: commonColors.neutral[900],
        content2: commonColors.neutral[850],
        content3: commonColors.neutral[800],
        content4: commonColors.neutral[750],

        default: {
          50: commonColors.neutral[900],
          100: commonColors.neutral[800],
          200: commonColors.neutral[700],
          300: commonColors.neutral[600],
          400: commonColors.neutral[500],
          500: commonColors.neutral[400],
          600: commonColors.neutral[300],
          700: commonColors.neutral[200],
          800: commonColors.neutral[100],
          900: commonColors.neutral[50],
          DEFAULT: commonColors.neutral[850],
        },
      },
    },
  },
}
