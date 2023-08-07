import { Outlet } from 'react-router-dom'
import { NavBar } from '@/components/NavBar'
import { Header } from '@/components/Header'

export function Component() {
  return (
    <>
      <NavBar />
      <main className="w-full h-full pl-20">
        <Header />
        <Outlet />
      </main>
    </>
  )
}
