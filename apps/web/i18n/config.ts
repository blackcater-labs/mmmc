import type { Pathnames } from 'next-intl/navigation'

export const locales = ['en', 'zh-CN']

export const defaultLocale = 'en'

export const pathnames = {} satisfies Pathnames<typeof locales>

export const localePrefix: 'as-needed' | 'always' | 'never' = 'as-needed'

export type AppPathnames = keyof typeof pathnames
