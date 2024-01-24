import type { VariantProps } from 'tailwind-variants'

import { tv } from '../../utils'

const avatar = tv({
  slots: {
    root: 'text-foreground relative z-0 flex shrink-0 items-center justify-center overflow-hidden align-middle data-[status=idle]:animate-pulse data-[status=loading]:animate-pulse',
    image: 'aspect-square size-full object-cover opacity-0 transition-opacity duration-500 data-[loaded=true]:opacity-100',
    fallback: 'flex size-full items-center justify-center',
  },
  variants: {
    variant: {
      soft: {},
      solid: {},
      bordered: {
        root: 'ring-2 ring-offset-2',
      },
    },
    color: {
      default: {
        root: 'bg-default text-default-foreground',
      },
      primary: {
        root: 'bg-primary-mellow text-primary',
      },
      secondary: {
        root: 'bg-secondary-mellow text-secondary',
      },
      tertiary: {
        root: 'bg-tertiary-mellow text-tertiary',
      },
      danger: {
        root: 'bg-danger-mellow text-danger',
      },
      success: {
        root: 'bg-success-mellow text-success',
      },
      warning: {
        root: 'bg-warning-mellow text-warning',
      },
      info: {
        root: 'bg-info-mellow text-info',
      },
    },
    size: {
      sm: {
        root: 'size-8 text-xs',
      },
      md: {
        root: 'size-10 text-sm',
      },
      lg: {
        root: 'size-14',
      },
    },
    radius: {
      full: {
        root: 'rounded-full',
      },
      none: {
        root: 'rounded-none',
      },
      sm: {
        root: 'rounded-md',
      },
      md: {
        root: 'rounded-lg',
      },
      lg: {
        root: 'rounded-xl',
      },
    },
  },
  defaultVariants: {
    variant: 'soft',
    color: 'default',
    size: 'md',
    radius: 'full',
  },
  compoundVariants: [
    {
      variant: 'solid',
      color: 'default',
      class: {
        root: 'bg-default text-default-foreground',
      },
    },
    {
      variant: 'solid',
      color: 'primary',
      class: {
        root: 'bg-primary text-primary-foreground',
      },
    },
    {
      variant: 'solid',
      color: 'secondary',
      class: {
        root: 'bg-secondary text-secondary-foreground',
      },
    },
    {
      variant: 'solid',
      color: 'tertiary',
      class: {
        root: 'bg-tertiary text-tertiary-foreground',
      },
    },
    {
      variant: 'solid',
      color: 'danger',
      class: {
        root: 'bg-danger text-danger-foreground',
      },
    },
    {
      variant: 'solid',
      color: 'success',
      class: {
        root: 'bg-success text-success-foreground',
      },
    },
    {
      variant: 'solid',
      color: 'warning',
      class: {
        root: 'bg-warning text-warning-foreground',
      },
    },
    {
      variant: 'solid',
      color: 'info',
      class: {
        root: 'bg-info text-info-foreground',
      },
    },

    {
      variant: 'bordered',
      color: 'default',
      class: {
        root: 'ring-default',
      },
    },
    {
      variant: 'bordered',
      color: 'primary',
      class: {
        root: 'ring-primary',
      },
    },
    {
      variant: 'bordered',
      color: 'secondary',
      class: {
        root: 'ring-secondary',
      },
    },
    {
      variant: 'bordered',
      color: 'tertiary',
      class: {
        root: 'ring-tertiary',
      },
    },
    {
      variant: 'bordered',
      color: 'danger',
      class: {
        root: 'ring-danger',
      },
    },
    {
      variant: 'bordered',
      color: 'success',
      class: {
        root: 'ring-success',
      },
    },
    {
      variant: 'bordered',
      color: 'warning',
      class: {
        root: 'ring-warning',
      },
    },
    {
      variant: 'bordered',
      color: 'info',
      class: {
        root: 'ring-info',
      },
    },
  ],
})

type AvatarVariantProps = VariantProps<typeof avatar>
type AvatarSlots = (typeof avatar)['slots']

export { avatar }
export type { AvatarVariantProps, AvatarSlots }
