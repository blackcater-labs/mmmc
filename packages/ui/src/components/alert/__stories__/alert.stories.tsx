import type { Meta, StoryObj } from '@storybook/react'
import { AlertTriangleIcon } from 'lucide-react'

import { Alert, alert } from '..'

const meta: Meta = {
  title: '基础组件/Alert',
  component: Alert,
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
  },
}
export default meta

const defaultProps = {
  ...alert.defaultVariants,
  title: 'I\'m a title',
  description: 'I\'m a description',
}

export const Preview: StoryObj = {
  args: {
    ...defaultProps,
  },
}

export const Colors: StoryObj = {
  render: () => (
    <div className="flex flex-col space-y-2">
      <Alert title="Default" />
      <Alert title="Primary" color="primary" />
      <Alert title="Secondary" color="secondary" />
      <Alert title="Tertiary" color="tertiary" />
      <Alert title="Danger" color="danger" />
      <Alert title="Success" color="success" />
      <Alert title="Warning" color="warning" />
      <Alert title="Info" color="info" />
    </div>
  ),
}

export const Variants: StoryObj = {
  render: () => (
    <div className="flex flex-col space-y-2">
      <Alert title="Soft" description="It\'s soft" variant="soft" color="primary" />
      <Alert title="Solid" description="It\'s solid" variant="solid" color="primary" />
      <Alert title="Bordered" description="It\'s bordered" variant="bordered" color="primary" />
    </div>
  ),
}

export const Icon: StoryObj = {
  render: () => (
    <div className="flex flex-col space-y-2">
      <Alert title="Icon" description="It\'s icon" icon={<AlertTriangleIcon />} variant="soft" color="danger" />
    </div>
  ),
}
