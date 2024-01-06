'use client'

import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react'

export function Header() {
  return (
    <header className="header border-default-200 flex flex-row items-center border-b px-8">
      <Breadcrumbs>
        <BreadcrumbItem href="/docs/components/button">Button</BreadcrumbItem>
        <BreadcrumbItem href="/docs/components/breadcrumbs">Breadcrumbs</BreadcrumbItem>
        <BreadcrumbItem href="/docs/components/card">Card</BreadcrumbItem>
        <BreadcrumbItem href="/docs/components/checkbox">Checkbox</BreadcrumbItem>
        <BreadcrumbItem href="/docs/components/code">Code</BreadcrumbItem>
      </Breadcrumbs>
    </header>
  )
}
