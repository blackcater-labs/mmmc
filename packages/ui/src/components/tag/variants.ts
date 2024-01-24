import type { VariantProps } from 'tailwind-variants'

import { tv } from '../../utils'

const tag = tv({
  base: 'focus:ring-primary inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  variants: {
    variant: {
      soft: 'border-transparent',
      solid: 'border-transparent',
      outline: 'bg-transparent',
    },
    color: {
      default: 'bg-default text-default-foreground',
      primary: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
      tertiary: 'bg-tertiary text-tertiary-foreground',
      danger: 'bg-danger text-danger-foreground',
      success: 'bg-success text-success-foreground',
      warning: 'bg-warning text-warning-foreground',
      info: 'bg-info text-info-foreground',
    },
  },
  defaultVariants: {
    variant: 'solid',
    color: 'default',
  },
  compoundVariants: [
    {
      variant: 'soft',
      color: 'primary',
      class: 'bg-primary-mellow text-primary',
    },
    {
      variant: 'soft',
      color: 'secondary',
      class: 'bg-secondary-mellow text-secondary',
    },
    {
      variant: 'soft',
      color: 'tertiary',
      class: 'bg-tertiary-mellow text-tertiary',
    },
    {
      variant: 'soft',
      color: 'danger',
      class: 'bg-danger-mellow text-danger',
    },
    {
      variant: 'soft',
      color: 'success',
      class: 'bg-success-mellow text-success',
    },
    {
      variant: 'soft',
      color: 'warning',
      class: 'bg-warning-mellow text-warning',
    },
    {
      variant: 'soft',
      color: 'info',
      class: 'bg-info-mellow text-info',
    },

    {
      variant: 'outline',
      color: 'default',
      class: 'border-border bg-transparent',
    },
    {
      variant: 'outline',
      color: 'primary',
      class: 'border-primary text-primary bg-transparent',
    },
    {
      variant: 'outline',
      color: 'secondary',
      class: 'border-secondary text-secondary bg-transparent',
    },
    {
      variant: 'outline',
      color: 'tertiary',
      class: 'border-tertiary text-tertiary bg-transparent',
    },
    {
      variant: 'outline',
      color: 'danger',
      class: 'border-danger text-danger bg-transparent',
    },
    {
      variant: 'outline',
      color: 'success',
      class: 'border-success text-success bg-transparent',
    },
    {
      variant: 'outline',
      color: 'warning',
      class: 'border-warning text-warning bg-transparent',
    },
    {
      variant: 'outline',
      color: 'info',
      class: 'border-info text-info bg-transparent',
    },
  ],
})

type TagVariantProps = VariantProps<typeof tag>

export { tag }
export type { TagVariantProps }
