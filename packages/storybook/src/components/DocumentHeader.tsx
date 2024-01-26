import React from 'react'

export interface DocumentHeaderProps {
  title: React.ReactNode
  description?: React.ReactNode
}

export function DocumentHeader({ title, description }: DocumentHeaderProps) {
  return (
    <div className="bg-content3 space-y-2 rounded-xl px-6 py-10">
      <div className="text-foreground !text-3xl font-bold">{title}</div>
      {description && <div className="text-foreground-muted !text-lg">{description}</div>}
    </div>
  )
}
