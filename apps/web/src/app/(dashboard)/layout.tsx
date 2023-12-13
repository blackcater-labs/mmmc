import { Outlet } from '@tanstack/react-router'

import { MainLayout } from './_components/MainLayout'

export default function $DashboardLayout() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}
