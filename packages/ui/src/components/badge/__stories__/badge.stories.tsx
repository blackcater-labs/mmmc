import type { Meta, StoryObj } from '@storybook/react'

import { Badge, badge } from '..'

const meta: Meta = {
  title: '基础组件/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['soft', 'solid', 'outline'],
    },
    color: {
      control: {
        type: 'select',
      },
      options: ['default', 'primary', 'secondary', 'tertiary', 'danger', 'success', 'warning', 'info'],
    },
  },
}
export default meta

const defaultProps = {
  children: 'Badge',
  ...badge.defaultVariants,
}

export const Preview: StoryObj = {
  args: {
    ...defaultProps,
  },
}

export const Colors: StoryObj = {
  render: () => (
    <div className="flex flex-row items-center space-x-2">
      <Badge color="default">Default</Badge>
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="tertiary">Tertiary</Badge>
      <Badge color="danger">Danger</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="info">Info</Badge>
    </div>
  ),
}

export const Variants: StoryObj = {
  render: () => (
    <div className="flex flex-row items-center space-x-2">
      <Badge variant="solid" color="primary">Solid</Badge>
      <Badge variant="soft" color="primary">Soft</Badge>
      <Badge variant="outline" color="primary">Outline</Badge>
    </div>
  ),
}
