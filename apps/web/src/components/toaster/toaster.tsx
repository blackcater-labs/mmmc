'use client'

import { useTheme } from 'next-themes'
import { Toaster as Sonner } from 'sonner'

type ToasterProps = React.ComponentProps<typeof Sonner>

function Toaster({ ...props }: ToasterProps) {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-content1 group-[.toaster]:text-foreground group-[.toaster]:border-default group-[.toaster]:shadow-large',
          description: 'group-[.toast]:text-default-500',
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton:
            'group-[.toast]:bg-content3 group-[.toast]:text-foreground',
          success: '!bg-success !text-success-foreground',
          error: '!bg-danger !text-danger-foreground',
          warning: '!bg-warning !text-warning-foreground',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
