import { Outlet } from 'react-router-dom'
import { NavBar } from '@/components/NavBar'
import { Header } from '@/components/Header'

export function Component() {
  return (
    <>
      <NavBar />
      <main className="relative flow-root h-full ml-20">
        <Header />
        <section className="mt-20 h[calc(100%-5rem)] overflow-auto">
          <Outlet />
        </section>
      </main>
    </>
  )
}
