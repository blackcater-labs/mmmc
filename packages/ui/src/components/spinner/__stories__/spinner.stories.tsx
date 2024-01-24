import type { Meta, StoryObj } from '@storybook/react'

import { Spinner, spinner } from '../index'

const meta: Meta<typeof Spinner> = {
  title: '基础组件/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: {
        type: 'select',
      },
      options: ['current', 'primary', 'secondary', 'tertiary', 'danger', 'success', 'warning', 'info'],
    },
  },
}

export default meta

const defaultProps = {
  ...spinner.defaultVariants,
}

export const Default: StoryObj = {
  args: {
    ...defaultProps,
  },
}

export const Sizes: StoryObj = {
  render: () => (
    <div className="flex flex-row items-center space-x-2">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
}

export const Colors: StoryObj = {
  render: () => (
    <div className="flex flex-row items-center space-x-2">
      <Spinner color="current" />
      <Spinner color="primary" />
      <Spinner color="secondary" />
      <Spinner color="tertiary" />
      <Spinner color="danger" />
      <Spinner color="success" />
      <Spinner color="warning" />
      <Spinner color="info" />
    </div>
  ),
}
