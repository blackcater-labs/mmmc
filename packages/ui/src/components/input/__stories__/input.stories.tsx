import type { Meta, StoryObj } from '@storybook/react'

import { Input, type InputVariantProps, input } from '..'

const meta: Meta<InputVariantProps> = {
  title: '组件/表单/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['default', 'bordered'],
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
  },
}
export default meta

const defaultProps = {
  ...input.defaultVariants,
  placeholder: 'Please input...',
  label: 'Label',
  description: 'Description',
}

export const Preview: StoryObj = {
  args: {
    ...defaultProps,
  },
}

export const Colors: StoryObj = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Input color="primary" placeholder="Primary" />
      <Input color="secondary" placeholder="Secondary" />
      <Input color="tertiary" placeholder="Tertiary" />
      <Input color="danger" placeholder="Danger" />
      <Input color="success" placeholder="Success" />
      <Input color="warning" placeholder="Warning" />
      <Input color="info" placeholder="Info" />
    </div>
  ),
}

export const Variants: StoryObj = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Input variant="default" placeholder="Default" color="primary" />
      <Input variant="bordered" placeholder="Bordered" color="primary" />
    </div>
  ),
}

export const Sizes: StoryObj = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Input size="sm" placeholder="Small" color="primary" />
      <Input size="md" placeholder="Medium" color="primary" />
      <Input size="lg" placeholder="Large" color="primary" />
    </div>
  ),
}

export const Disabled: StoryObj = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Input disabled placeholder="Disabled" />
      <Input disabled variant="bordered" placeholder="Disabled" />
    </div>
  ),
}

export const Required: StoryObj = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Input required placeholder="Required" label="Label" />
    </div>
  ),
}
