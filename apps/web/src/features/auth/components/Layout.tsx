interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {children}
    </main>
  )
}

export { Layout }
export type { LayoutProps }
