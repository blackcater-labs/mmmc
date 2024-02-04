import type { Preview } from '@storybook/react'
import type { ThemeVars } from '@storybook/theming'

import { commonColors } from '@mmmc/theme'
import { NextUIProvider } from '@nextui-org/react'
import { DocsContainer } from '@storybook/addon-docs'
import { themes } from '@storybook/theming'
import React from 'react'
import { useDarkMode } from 'storybook-dark-mode'

import './global.css'

const commonTheme: Partial<ThemeVars> = {
  brandTitle: 'Mmmc',
  brandUrl: 'https://mmmc.blackcater.org',
  brandTarget: '_self',

  appBorderRadius: 14,
}

const locales = [
  // 'ar-AE',
  // 'bg-BG',
  // 'cs-CZ',
  // 'da-DK',
  // 'de-DE',
  // 'el-GR',
  'en-US',
  // 'es-ES',
  // 'et-EE',
  // 'fi-FI',
  // 'fr-FR',
  // 'he-IL',
  // 'hr-HR',
  // 'hu-HU',
  // 'it-IT',
  // 'ja-JP',
  // 'ko-KR',
  // 'lt-LT',
  // 'lv-LV',
  // 'nb-NO',
  // 'nl-NL',
  // 'pl-PL',
  // 'pt-BR',
  // 'pt-PT',
  // 'ro-RO',
  // 'ru-RU',
  // 'sk-SK',
  // 'sl-SI',
  // 'sr-SP',
  // 'sv-SE',
  // 'tr-TR',
  // 'uk-UA',
  'zh-CN',
  // 'zh-TW',
]

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
      storySort: {
        order: [
          'Getting Started',
          'Components',
          ['Basic', 'Feedback', 'Form', 'Others'],
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
      current: 'dark',
      stylePreview: true,
      darkClass: 'dark',
      lightClass: 'light',
      classTarget: 'html',
      dark: {
        ...themes.dark,
        ...commonTheme,

        appBg: commonColors.neutral[950],
        barBg: commonColors.neutral[950],
      },
      light: {
        ...themes.light,
        ...commonTheme,

        appBg: commonColors.gray[50],
        barBg: commonColors.gray[50],
      },
    },
    // https://github.com/hipstersmoothie/storybook-dark-mode/issues/180#issuecomment-1573276315
    docs: {
      container: (props) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const isDark = useDarkMode()
        const currentProps = { ...props }
        currentProps.theme = isDark ? themes.dark : themes.light
        return React.createElement(DocsContainer, currentProps)
      },
    },
  },
  decorators: [
    (Story, { globals: { locale } }) => {
      const direction
        // @ts-expect-error-next-line
        = locale && new Intl.Locale(locale)?.textInfo?.direction === 'rtl' ? 'rtl' : undefined

      return (
        <NextUIProvider locale={locale}>
          <div className="bg-dark" dir={direction} lang={locale}>
            <Story />
          </div>
        </NextUIProvider>
      )
    },
  ],

  globalTypes: {
    locale: {
      toolbar: {
        icon: 'globe',
        items: locales.map(locale => ({
          value: locale,
          title: new Intl.DisplayNames(undefined, { type: 'language' }).of(locale),
          // @ts-expect-error-next-line
          right: new Intl.Locale(locale)?.textInfo?.direction === 'rtl' ? 'Right to Left' : undefined,
        })),
      },
    },
  },
}

export default preview
