import type { ThemeVars } from '@storybook/theming'
import { themes } from '@storybook/theming'
import type { Preview } from '@storybook/react'

import '../src/global.css'

const commonTheme: Partial<ThemeVars> = {
  brandTitle: 'Mmmc',
  brandUrl: 'https://mmmc.blackcater.org',
  brandTarget: '_self',

  inputBorderRadius: 8,
}

const lightTheme: ThemeVars = {
  ...themes.light,
  ...commonTheme,
  // brandImage: '/light-logo.svg',

  appBorderRadius: 8,
}

const darkTheme: ThemeVars = {
  ...themes.dark,
  ...commonTheme,
  // brandImage: '/dark-logo.svg',
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
      storySort: {
        order: [
          'Getting Started',
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
