import type { VariantProps } from 'tailwind-variants'

import { tv } from '../../utils'

const button = tv({
  base: 'focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      solid: '',
      outline: '',
      ghost: '',
      link: '',
    },
    color: {
      default: '',
      primary: '',
      secondary: '',
      tertiary: '',
      danger: '',
      success: '',
      warning: '',
      info: '',
    },
    size: {
      sm: 'h-8 rounded-md px-3 text-xs',
      md: 'h-9 px-4 py-2',
      lg: 'h-10 rounded-md px-8',
    },
    radius: {
      sm: 'rounded-md',
      md: 'rounded-lg',
      lg: 'rounded-xl',
      full: 'rounded-full',
      none: 'rounded-none',
    },
    isIconOnly: {
      true: '',
    },
  },
  defaultVariants: {
    variant: 'solid',
    color: 'default',
    size: 'md',
    radius: 'md',
    isIconOnly: false,
  },
})

type ButtonVariantProps = VariantProps<typeof button>

export { button }
export type { ButtonVariantProps }
