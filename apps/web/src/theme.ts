'use client'

import type { CSSVariablesResolver } from '@mantine/core'

import { createTheme } from '@mantine/core'

import { codeFont, defaultFont } from '~/utils/font'

export const theme = createTheme({
  primaryColor: 'indigo',
  defaultRadius: 'md',
  defaultGradient: { from: 'indigo', to: 'violet', deg: 90 },
  focusRing: 'auto',
  cursorType: 'pointer',
  fontFamily: `${defaultFont.style.fontFamily}, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  fontFamilyMonospace: `${codeFont.style.fontFamily}, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
  headings: {
    fontFamily: `${defaultFont.style.fontFamily}, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
    fontWeight: '700',
  },
  components: {},
  colors: {},
  other: {
    neutral: {
      0: '#f5f5f5',
      1: '#e5e5e5',
      2: '#d4d4d4',
      3: '#a3a3a3',
      4: '#737373',
      5: '#525252',
      6: '#404040',
      7: '#262626',
      8: '#171717',
      9: '#0a0a0a',
    },
  },
})

export const cssVariablesResolver: CSSVariablesResolver = theme => ({
  variables: {},
  light: {
    '--mantine-color-body': theme.other.neutral[0],
    '--mantine-color-text': theme.other.neutral[9],
    '--mantine-color-dimmed': theme.other.neutral[5],
  },
  dark: {
    '--mantine-color-body': theme.other.neutral[9],
    '--mantine-color-text': theme.other.neutral[0],
    '--mantine-color-dimmed': theme.colors.dark[0],
  },
})
