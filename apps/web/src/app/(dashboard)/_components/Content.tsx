export interface ContentProps {
  children: React.ReactNode
}

export function Content({ children }: ContentProps) {
  return <main className="main overflow-y-auto">{children}</main>
}
