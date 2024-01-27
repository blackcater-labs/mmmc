import { LocaleProviders } from './Providers'

interface RootLayoutProps {
  params: { locale: string }
  children: React.ReactNode
}

export default async function LocaleLayout({ params, children }: RootLayoutProps) {
  return (
    <LocaleProviders params={params}>{children}</LocaleProviders>
  )
}
