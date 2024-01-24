import type { VariantProps } from 'tailwind-variants'

import { tv } from '../../utils'

const alert = tv({
  slots: {
    root: 'group relative flex w-full flex-row rounded-lg p-4',
    icon: 'group/icon mr-2 flex-shrink-0',
    content: 'group/content',
    title: 'font-medium',
    description: 'text-sm',
  },
  variants: {
    variant: {
      solid: {},
      soft: {},
      bordered: {
        root: 'border-2',
      },
    },
    color: {
      default: {
        root: 'bg-default text-foreground',
        description: 'text-foreground-muted',
      },
      primary: {
        root: 'bg-primary-mellow text-primary',
        description: 'text-primary/80',
      },
      secondary: {
        root: 'bg-secondary-mellow text-secondary',
        description: 'text-secondary/80',
      },
      tertiary: {
        root: 'bg-tertiary-mellow text-tertiary',
        description: 'text-tertiary/80',
      },
      danger: {
        root: 'bg-danger-mellow text-danger',
        description: 'text-danger/80',
      },
      success: {
        root: 'bg-success-mellow text-success',
        description: 'text-success/80',
      },
      warning: {
        root: 'bg-warning-mellow text-warning',
        description: 'text-warning/80',
      },
      info: {
        root: 'bg-info-mellow text-info',
        description: 'text-info/80',
      },
    },
  },
  defaultVariants: {
    variant: 'soft',
    color: 'default',
  },
  compoundVariants: [
    {
      variant: 'solid',
      color: 'primary',
      class: {
        root: 'bg-primary text-primary-foreground',
        description: 'text-primary-muted',
      },
    },
    {
      variant: 'solid',
      color: 'secondary',
      class: {
        root: 'bg-secondary text-secondary-foreground',
        description: 'text-secondary-muted',
      },
    },
    {
      variant: 'solid',
      color: 'tertiary',
      class: {
        root: 'bg-tertiary text-tertiary-foreground',
        description: 'text-tertiary-muted',
      },
    },
    {
      variant: 'solid',
      color: 'danger',
      class: {
        root: 'bg-danger text-danger-foreground',
        description: 'text-danger-muted',
      },
    },
    {
      variant: 'solid',
      color: 'success',
      class: {
        root: 'bg-success text-success-foreground',
        description: 'text-success-muted',
      },
    },
    {
      variant: 'solid',
      color: 'warning',
      class: {
        root: 'bg-warning text-warning-foreground',
        description: 'text-warning-muted',
      },
    },
    {
      variant: 'solid',
      color: 'info',
      class: {
        root: 'bg-info text-info-foreground',
        description: 'text-info-muted',
      },
    },

    {
      variant: 'bordered',
      color: 'primary',
      class: {
        root: 'border-primary',
      },
    },
    {
      variant: 'bordered',
      color: 'secondary',
      class: {
        root: 'border-secondary',
      },
    },
    {
      variant: 'bordered',
      color: 'tertiary',
      class: {
        root: 'border-tertiary',
      },
    },
    {
      variant: 'bordered',
      color: 'danger',
      class: {
        root: 'border-danger',
      },
    },
    {
      variant: 'bordered',
      color: 'success',
      class: {
        root: 'border-success',
      },
    },
    {
      variant: 'bordered',
      color: 'warning',
      class: {
        root: 'border-warning',
      },
    },
    {
      variant: 'bordered',
      color: 'info',
      class: {
        root: 'border-info',
      },
    },
  ],
})

type AlertVariantProps = VariantProps<typeof alert>
type AlertSlots = (typeof alert)['slots']

export { alert }
export type { AlertVariantProps, AlertSlots }
