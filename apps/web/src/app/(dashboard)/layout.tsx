import { Content } from './_components/Content'
import { Header } from './_components/Header'
import { Logo } from './_components/Logo'
import { Navbar } from './_components/Navbar'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="layout h-screen w-screen">
      <Logo />
      <Header />
      <Navbar />
      <Content>{children}</Content>
    </div>
  )
}
