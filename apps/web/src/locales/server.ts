import { createI18nServer } from 'next-international/server'

export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer({
  'en-US': () => import('./messages/en-US'),
  'zh-CN': () => import('./messages/zh-CN'),
})
