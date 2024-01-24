import type { VariantProps } from 'tailwind-variants'
import { tv } from '../../utils'

// "flex border border-input ring-offset-background",
const input = tv({
  slots: {
    root: 'relative z-0',
    wrapper: 'flex flex-col',
    label: 'text-foreground mb-1 flex flex-row items-center text-sm font-medium',
    input: 'placeholder:text-foreground-muted focus-visible:ring-primary w-full focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50',
    description: 'text-foreground-muted mt-1 text-sm',
  },
  variants: {
    variant: {
      default: {
        input: 'border-2',
      },
      bordered: {
        input: 'border-2 bg-transparent',
      },
    },
    color: {
      default: {
        input: 'border-default bg-default',
      },
      primary: {
        input: 'border-primary-mellow bg-primary-mellow text-primary placeholder:text-primary-muted',
      },
      secondary: {
        input: 'border-secondary-mellow bg-secondary-mellow text-secondary placeholder:text-secondary-muted focus-visible:ring-secondary',
      },
      tertiary: {
        input: 'border-tertiary-mellow bg-tertiary-mellow text-tertiary placeholder:text-tertiary-muted focus-visible:ring-tertiary',
      },
      danger: {
        input: 'border-danger-mellow bg-danger-mellow text-danger placeholder:text-danger-muted focus-visible:ring-danger',
      },
      success: {
        input: 'border-success-mellow bg-success-mellow text-success placeholder:text-success-muted focus-visible:ring-success',
      },
      warning: {
        input: 'border-warning-mellow bg-warning-mellow text-warning placeholder:text-warning-muted focus-visible:ring-warning',
      },
      info: {
        input: 'border-info-mellow bg-info-mellow text-info placeholder:text-info-muted focus-visible:ring-info',
      },
    },
    size: {
      sm: {
        label: 'text-xs',
        input: 'h-8 rounded-md px-2 py-1 text-xs',
        description: 'text-xs',
      },
      md: {
        input: 'h-10 rounded-lg px-3 py-2 text-sm',
      },
      lg: {
        label: 'text-base',
        input: 'h-12 rounded-lg px-4 py-3 text-base',
        description: 'text-base',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    color: 'default',
    size: 'md',
  },
  compoundVariants: [
    {
      variant: 'bordered',
      color: 'primary',
      class: {
        input: 'bg-transparent',
      },
    },
    {
      variant: 'bordered',
      color: 'secondary',
      class: {
        input: 'bg-transparent',
      },
    },
    {
      variant: 'bordered',
      color: 'tertiary',
      class: {
        input: 'bg-transparent',
      },
    },
    {
      variant: 'bordered',
      color: 'danger',
      class: {
        input: 'bg-transparent',
      },
    },
    {
      variant: 'bordered',
      color: 'success',
      class: {
        input: 'bg-transparent',
      },
    },
    {
      variant: 'bordered',
      color: 'warning',
      class: {
        input: 'bg-transparent',
      },
    },
    {
      variant: 'bordered',
      color: 'info',
      class: {
        input: 'bg-transparent',
      },
    },
  ],
})

type InputVariantProps = VariantProps<typeof input>
type InputSlots = (typeof input)['slots']

export { input }
export type { InputVariantProps, InputSlots }
