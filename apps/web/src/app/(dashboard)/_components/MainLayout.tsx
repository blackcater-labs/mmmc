import { Header } from './Header'
import { Sidebar } from './Sidebar'

export interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <div className="absolute inset-x-0 bottom-0 top-[54px] flex">
        <Sidebar />
        <main className="h-full flex-1">
          {children}
        </main>
      </div>
    </>
  )
}
