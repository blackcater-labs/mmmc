import type { Meta, StoryObj } from '@storybook/react'
import { ActivitySquareIcon } from 'lucide-react'

import type { ButtonVariantProps } from '../index'
import { Button, button } from '../index'

const meta: Meta<ButtonVariantProps> = {
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

export const Preview: StoryObj = {
  args: {
    ...defaultProps,
  },
}

export const Colors: StoryObj = {
  render: () => (
    <div className="flex flex-row items-center space-x-2">
      <Button color="default">Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="tertiary">Tertiary</Button>
      <Button color="danger">Danger</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="info">Info</Button>
    </div>
  ),
}

export const Variants: StoryObj = {
  render: () => (
    <div className="space-y-2">
      <div className="flex flex-row items-center space-x-2">
        <Button variant="solid">Solid</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex flex-row items-center space-x-2">
        <Button variant="solid" color="primary">Solid</Button>
        <Button variant="outline" color="primary">Outline</Button>
        <Button variant="ghost" color="primary">Ghost</Button>
        <Button variant="link" color="primary">Link</Button>
      </div>
    </div>
  ),
}

export const Sizes: StoryObj = {
  render: () => (
    <div className="flex flex-row items-center space-x-2">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

export const Radius: StoryObj = {
  render: () => (
    <div className="flex flex-row items-center space-x-2">
      <Button radius="none">None</Button>
      <Button radius="sm">Small</Button>
      <Button radius="md">Medium</Button>
      <Button radius="lg">Large</Button>
      <Button radius="full">Full</Button>
    </div>
  ),
}

export const FullWidth: StoryObj = {
  render: () => (
    <div className="space-y-2">
      <Button className="w-full" color="default">Default</Button>
      <Button className="w-full" color="primary">Primary</Button>
      <Button className="w-full" color="secondary">Secondary</Button>
      <Button className="w-full" color="tertiary">Tertiary</Button>
      <Button className="w-full" color="danger">Danger</Button>
      <Button className="w-full" color="success">Success</Button>
      <Button className="w-full" color="warning">Warning</Button>
      <Button className="w-full" color="info">Info</Button>
    </div>
  ),
}

export const IconOnly: StoryObj = {
  render: () => (
    <div className="flex flex-row items-center space-x-2">
      <Button isIconOnly color="primary" size="sm">
        <ActivitySquareIcon className="size-4" />
      </Button>
      <Button isIconOnly color="primary">
        <ActivitySquareIcon className="size-5" />
      </Button>
      <Button isIconOnly color="primary" size="lg">
        <ActivitySquareIcon className="size-6" />
      </Button>
    </div>
  ),
}

export const As: StoryObj = {
  render: () => (
    <div className="flex flex-row items-center space-x-2">
      <Button variant="link" as="a" href="https://www.baidu.com" target="_blank">
        Baidu
      </Button>
    </div>
  ),
}

export const Disabled: StoryObj = {
  args: {
    ...defaultProps,
    disabled: true,
  },
}

export const Loading: StoryObj = {
  render: () => (
    <div className="flex flex-row items-center space-x-2">
      <Button loading color="primary" size="sm">Loading</Button>
      <Button loading color="primary">Loading</Button>
      <Button loading color="primary" size="lg">Loading</Button>
    </div>
  ),
}
