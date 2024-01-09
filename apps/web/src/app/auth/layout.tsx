interface PageProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: PageProps) {
  return (
    <div className="grid min-h-screen grid-cols-[minmax(2rem,_1fr)_minmax(auto,_450px)_minmax(2rem,_1fr)] grid-rows-[minmax(2rem,_1fr)_auto_minmax(2rem,_1fr)]">
      <div className="col-start-2 row-start-2">{children}</div>
    </div>
  )
}
