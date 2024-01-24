import type { ThemeVars } from '@storybook/theming'
import { themes } from '@storybook/theming'
import type { Preview } from '@storybook/react'
import { commonColors } from '@mmmc/theme'

import '../src/global.css'

const commonTheme: Partial<ThemeVars> = {
  brandTitle: 'Mmmc',
  brandUrl: 'https://mmmc.blackcater.org',
  brandTarget: '_self',

  colorPrimary: commonColors.blue[600],
  colorSecondary: commonColors.blue[600],

  barHoverColor: commonColors.blue[600],
  barSelectedColor: commonColors.blue[600],

  inputBorderRadius: 8,
}

const lightTheme: ThemeVars = {
  ...themes.light,
  ...commonTheme,
  // brandImage: '/light-logo.svg',

  appBg: commonColors.gray[50],
  appBorderColor: commonColors.gray[250],
  appBorderRadius: 8,

  textColor: commonColors.gray[900],
  textMutedColor: commonColors.gray[600],

  barBg: commonColors.gray[50],
  barTextColor: commonColors.gray[600],
}

const darkTheme: ThemeVars = {
  ...themes.dark,
  ...commonTheme,
  // brandImage: '/dark-logo.svg',

  appBg: commonColors.neutral[950],
  appBorderColor: commonColors.neutral[900],
  appBorderRadius: 8,
  appPreviewBg: commonColors.neutral[950],
  appContentBg: commonColors.neutral[950],

  textColor: commonColors.gray[100],
  textMutedColor: commonColors.gray[400],

  barBg: commonColors.neutral[900],
  barTextColor: commonColors.gray[400],
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
      storySort: {
        order: [
          'Getting Started',
          '组件',
          ['展示', '交互', '表单', '其他'],
          '片段',
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      current: 'light',
      stylePreview: true,
      darkClass: 'dark',
      lightClass: 'light',
      classTarget: 'html',
      light: lightTheme,
      dark: darkTheme,
    },
  },
  // decorators: [],
}

export default preview
