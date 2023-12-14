import { Outlet } from '@tanstack/react-router'

import { Header } from './_components/Header'

export default function HomeLayout() {
  return (
    <div className="absolute inset-0 flex flex-col">
      <Header />
      <Outlet />
    </div>
  )
}
