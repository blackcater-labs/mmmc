import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'

import type { ButtonVariantProps } from './variants'
import { button } from './variants'

type ButtonProps<T extends React.ElementType = 'button'> = React.ComponentPropsWithoutRef<T> & ButtonVariantProps & {
  as?: T
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement | HTMLLinkElement, ButtonProps>(({
  className,
  variant,
  color,
  size,
  radius,
  isIconOnly,
  as,
  asChild,
  children,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : (as || 'button')

  return (
    <Comp
      className={button({ class: className, variant, color, size, radius, isIconOnly })}
      ref={ref}
      {...props}
    >
      {children}
    </Comp>
  )
})
Button.displayName = 'Button'

export { Button }
export type { ButtonProps, ButtonVariantProps }
