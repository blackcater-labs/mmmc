import type { VariantProps } from 'tailwind-variants'

import { tv } from '../../utils'

const button = tv({
  base: 'focus-visible:ring-primary inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 active:scale-95 disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      solid: '',
      outline: '',
      ghost: '',
      link: 'underline-offset-2 hover:underline',
    },
    color: {
      default: 'text-foreground',
      primary: 'text-primary',
      secondary: 'text-secondary',
      tertiary: 'text-tertiary',
      danger: 'text-danger',
      success: 'text-success',
      warning: 'text-warning',
      info: 'text-info',
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
      true: 'p-0',
    },
  },
  defaultVariants: {
    variant: 'solid',
    color: 'default',
    size: 'md',
    radius: 'md',
    isIconOnly: false,
  },
  compoundVariants: [
    {
      variant: 'solid',
      color: 'default',
      class: 'bg-default text-default-foreground',
    },
    {
      variant: 'solid',
      color: 'primary',
      class: 'bg-primary text-primary-foreground',
    },
    {
      variant: 'solid',
      color: 'secondary',
      class: 'bg-secondary text-secondary-foreground',
    },
    {
      variant: 'solid',
      color: 'tertiary',
      class: 'bg-tertiary text-tertiary-foreground',
    },
    {
      variant: 'solid',
      color: 'danger',
      class: 'bg-danger text-danger-foreground',
    },
    {
      variant: 'solid',
      color: 'success',
      class: 'bg-success text-success-foreground',
    },
    {
      variant: 'solid',
      color: 'warning',
      class: 'bg-warning text-warning-foreground',
    },
    {
      variant: 'solid',
      color: 'info',
      class: 'bg-info text-info-foreground',
    },
    {
      variant: 'outline',
      size: 'sm',
      class: 'border',
    },
    {
      variant: 'outline',
      size: 'md',
      class: 'border-2',
    },
    {
      variant: 'outline',
      size: 'lg',
      class: 'border-2',
    },
    {
      variant: 'outline',
      color: 'default',
      class: 'border-default hover:bg-default',
    },
    {
      variant: 'outline',
      color: 'primary',
      class: 'border-primary hover:bg-primary hover:text-primary-foreground',
    },
    {
      variant: 'outline',
      color: 'secondary',
      class: 'border-secondary hover:bg-secondary hover:text-secondary-foreground',
    },
    {
      variant: 'outline',
      color: 'tertiary',
      class: 'border-tertiary hover:bg-tertiary hover:text-tertiary-foreground',
    },
    {
      variant: 'outline',
      color: 'danger',
      class: 'border-danger hover:bg-danger hover:text-danger-foreground',
    },
    {
      variant: 'outline',
      color: 'success',
      class: 'border-success hover:bg-success hover:text-success-foreground',
    },
    {
      variant: 'outline',
      color: 'warning',
      class: 'border-warning hover:bg-warning hover:text-warning-foreground',
    },
    {
      variant: 'outline',
      color: 'info',
      class: 'border-info hover:bg-info hover:text-info-foreground',
    },
    {
      variant: 'ghost',
      color: 'default',
      class: 'hover:bg-default',
    },
    {
      variant: 'ghost',
      color: 'primary',
      class: 'hover:bg-primary-mellow',
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: 'hover:bg-secondary-mellow',
    },
    {
      variant: 'ghost',
      color: 'tertiary',
      class: 'hover:bg-tertiary-mellow',
    },
    {
      variant: 'ghost',
      color: 'danger',
      class: 'hover:bg-danger-mellow',
    },
    {
      variant: 'ghost',
      color: 'success',
      class: 'hover:bg-success-mellow',
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: 'hover:bg-warning-mellow',
    },
    {
      variant: 'ghost',
      color: 'info',
      class: 'hover:bg-info-mellow',
    },
    {
      isIconOnly: true,
      size: 'sm',
      class: 'size-8',
    },
    {
      isIconOnly: true,
      size: 'md',
      class: 'size-9',
    },
    {
      isIconOnly: true,
      size: 'lg',
      class: 'size-10',
    },
  ],
})

type ButtonVariantProps = VariantProps<typeof button>

export { button }
export type { ButtonVariantProps }
