import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { Spinner } from '../spinner'
import type { ButtonVariantProps } from './variants'
import { button } from './variants'

// FIXME: It's a little of tricky
type ButtonProps = Omit<React.AllHTMLAttributes<HTMLButtonElement>, keyof ButtonVariantProps> & ButtonVariantProps & {
  as?: React.ElementType
  asChild?: boolean
  loading?: boolean
  spinner?: React.ReactNode
  spinnerPlacement?: 'start' | 'end'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  variant,
  color,
  size,
  radius,
  isIconOnly,
  as,
  asChild,
  disabled,
  loading,
  spinner,
  spinnerPlacement,
  children,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : (as || 'button')
  disabled = disabled || loading

  return (
    <Comp
      className={button({ class: className, variant, color, size, radius, isIconOnly })}
      ref={ref}
      disabled={disabled}
      {...props}
    >
      {loading && spinnerPlacement !== 'end' && (spinner || <Spinner size={size} />)}
      {children}
      {loading && spinnerPlacement === 'end' && (spinner || <Spinner size={size} />)}
    </Comp>
  )
})
Button.displayName = 'Button'

export { Button }
export type { ButtonProps }
