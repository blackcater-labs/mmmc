import type { Meta, StoryObj } from '@storybook/react'

import type { AvatarVariantProps } from '../index'
import { Avatar, avatar } from '../index'

const meta: Meta<AvatarVariantProps> = {
  title: '基础组件/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['soft', 'solid', 'bordered'],
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
  },
}
export default meta

const defaultProps = {
  ...avatar.defaultVariants,
  name: 'BC',
}

export const Preview: StoryObj = {
  args: {
    ...defaultProps,
  },
}

export const Colors: StoryObj = {
  render: () => {
    return (
      <div className="flex flex-row items-center space-x-2">
        <Avatar name="BC" color="default" />
        <Avatar name="BC" color="primary" />
        <Avatar name="BC" color="secondary" />
        <Avatar name="BC" color="tertiary" />
        <Avatar name="BC" color="danger" />
        <Avatar name="BC" color="success" />
        <Avatar name="BC" color="warning" />
        <Avatar name="BC" color="info" />
      </div>
    )
  },
}

export const Variants: StoryObj = {
  render: () => {
    return (
      <div className="flex flex-row items-center space-x-2">
        <Avatar name="BC" variant="soft" color="primary" />
        <Avatar name="BC" variant="solid" color="primary" />
        <Avatar name="BC" variant="bordered" color="primary" />
      </div>
    )
  },
}

export const Sizes: StoryObj = {
  render: () => {
    return (
      <div className="flex flex-row items-center space-x-2">
        <Avatar name="BC" className="size-6 text-xs" />
        <Avatar name="BC" size="sm" />
        <Avatar name="BC" size="md" />
        <Avatar name="BC" size="lg" />
      </div>
    )
  },
}

export const Radius: StoryObj = {
  render: () => {
    return (
      <div className="flex flex-row items-center space-x-2">
        <Avatar name="BC" radius="none" />
        <Avatar name="BC" radius="sm" />
        <Avatar name="BC" radius="md" />
        <Avatar name="BC" radius="lg" />
        <Avatar name="BC" radius="full" />
      </div>
    )
  },
}

export const Fallback: StoryObj = {
  render: () => {
    return (
      <div className="flex flex-row items-center space-x-2">
        <Avatar showFallback color="primary" size="sm" src="https://images.unsplash.com/broken" />
        <Avatar showFallback color="primary" src="https://images.unsplash.com/broken" />
        <Avatar showFallback color="primary" size="lg" src="https://images.unsplash.com/broken" />
        <Avatar showFallback name="Jane" color="primary" src="https://images.unsplash.com/broken" />
        <Avatar name="Joe" color="primary" src="https://images.unsplash.com/broken" />
      </div>
    )
  },
}

export const Image: StoryObj = {
  render: () => {
    return (
      <div className="flex flex-row items-center space-x-2">
        <Avatar src="/images/local-avatar.jpeg" size="sm" />
        <Avatar src="/images/local-avatar.jpeg" />
        <Avatar src="/images/local-avatar.jpeg" size="lg" />
      </div>
    )
  },
}
