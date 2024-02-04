import { LocaleProviders } from './Providers'

interface RootLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export default async function LocaleLayout({ params, children }: RootLayoutProps) {
  return (
    <LocaleProviders params={params}>{children}</LocaleProviders>
  )
}
