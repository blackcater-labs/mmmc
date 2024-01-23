import React from 'react'
import type { Meta } from '@storybook/react'

import { Button, button } from '../index'

const meta: Meta<typeof Button> = {
  title: '基础组件/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['solid', 'outline', 'ghost', 'link'],
    },
    color: {
      control: {
        type: 'select',
      },
      options: ['default', 'primary', 'secondary', 'tertiary', 'danger', 'success', 'warning', 'info'],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg'],
    },
    radius: {
      control: {
        type: 'select',
      },
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    isIconOnly: {
      control: {
        type: 'boolean',
      },
    },
  },
}

export default meta

const defaultProps = {
  children: 'Button',
  ...button.defaultVariants,
}

export const Default = {
  args: {
    ...defaultProps,
  },
}
