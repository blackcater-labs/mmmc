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
          'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-default-500',
          // default: '',
          success: '!bg-success-300 !border-success-500 dark:!bg-success-100 dark:!border-success-300',
          info: '!bg-blue-300 !border-blue-500 dark:!bg-blue-700 dark:!border-blue-300',
          warning: '!bg-warning-300 !border-warning-500 dark:!bg-warning-100 dark:!border-warning-300',
          error: '!bg-danger-300 !border-danger-500 dark:!bg-danger-100 dark:!border-danger-300',
          actionButton:
          'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
