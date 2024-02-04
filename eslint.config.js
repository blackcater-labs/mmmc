import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'
import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural'

const compat = new FlatCompat()

/** @type {import('@antfu/eslint-config').antfu} */
export default antfu(
  // antfu recommended
  {
    formatters: {
      css: true,
      html: true,
    },
    react: true,
    rules: {
      'import/order': 'off', // conflicts with perfectionist,
    },
  },
  // perfectionist recommended
  perfectionistNatural,
  {
    rules: {
      'perfectionist/sort-objects': 'off',
      'perfectionist/sort-enums': 'off',
    },
  },
  // tailwindcss recommended
  ...compat.config({
    extends: [
      'plugin:tailwindcss/recommended',
    ],
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    },
    settings: {
      tailwindcss: {
        callees: ['classnames', 'clsx', 'ctl', 'cn', 'tv', 'tm'],
      },
    },
  }),

  // Overrides
  {
    files: ['apps/server/**/*.ts'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
  {
    files: ['apps/web/**/*.{ts,tsx}'],
    rules: {
      'node/prefer-global/process': 'off',
      'react-refresh/only-export-components': 'off',
    },
  },
)
