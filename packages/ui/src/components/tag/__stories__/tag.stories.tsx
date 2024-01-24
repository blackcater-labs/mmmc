import type { Meta, StoryObj } from '@storybook/react'

import { Tag, tag } from '..'

const meta: Meta = {
  title: '组件/展示/Tag',
  component: Tag,
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
  children: 'Tag',
  ...tag.defaultVariants,
}

export const Preview: StoryObj = {
  args: {
    ...defaultProps,
  },
}

export const Colors: StoryObj = {
  render: () => (
    <div className="flex flex-row items-center space-x-2">
      <Tag color="default">Default</Tag>
      <Tag color="primary">Primary</Tag>
      <Tag color="secondary">Secondary</Tag>
      <Tag color="tertiary">Tertiary</Tag>
      <Tag color="danger">Danger</Tag>
      <Tag color="success">Success</Tag>
      <Tag color="warning">Warning</Tag>
      <Tag color="info">Info</Tag>
    </div>
  ),
}

export const Variants: StoryObj = {
  render: () => (
    <div className="flex flex-row items-center space-x-2">
      <Tag variant="solid" color="primary">Solid</Tag>
      <Tag variant="soft" color="primary">Soft</Tag>
      <Tag variant="outline" color="primary">Outline</Tag>
    </div>
  ),
}
