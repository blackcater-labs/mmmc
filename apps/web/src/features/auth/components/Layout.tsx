interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex h-[100vh] w-[100vw] flex-col items-center justify-center">
      <main className="flex size-full flex-col items-center justify-center p-8">
        {children}
      </main>
    </div>
  )
}

export { Layout }
export type { LayoutProps }
