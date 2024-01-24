import type { VariantProps } from 'tailwind-variants'

import { tv } from '../../utils'

const spinner = tv({
  base: 'animate-spin text-current',
  variants: {
    size: {
      sm: 'size-4',
      md: 'size-5',
      lg: 'size-6',
    },
    color: {
      current: 'text-current',
      primary: 'text-primary',
      secondary: 'text-secondary',
      tertiary: 'text-tertiary',
      danger: 'text-danger',
      success: 'text-success',
      warning: 'text-warning',
      info: 'text-info',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'current',
  },
})

type SpinnerVariantProps = VariantProps<typeof spinner>

export { spinner }
export type { SpinnerVariantProps }
