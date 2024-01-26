interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <main className="absolute inset-0 flex size-full flex-col items-center justify-center">
      {children}
    </main>
  )
}

export { Layout }
export type { LayoutProps }
