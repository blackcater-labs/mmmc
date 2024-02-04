import React from 'react'

import { Navbar } from '~/components/Navbar'
import { Sidebar } from '~/components/Sidebar/Sidebar'

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="flex min-h-screen flex-col pl-[256px] pt-16">
        <div className="flex-1">{children}</div>
      </main>
    </>
  )
}
