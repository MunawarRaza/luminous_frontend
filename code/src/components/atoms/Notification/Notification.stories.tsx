import { StoryObj } from '@storybook/react'
import Notification from './Notification'
import { CircleStackIcon } from '@heroicons/react/24/outline'

export default {
  title: 'Notification',
  component: Notification
}

type Story = StoryObj<typeof Notification>

export const Default: Story = {
  name: 'Notification',
  args: {
    isOpen: true,
    title: 'Notification title',
    message: 'Notification message'
  }
}

export const WithIcon: Story = {
  name: 'Notification with icon',
  args: {
    isOpen: true,
    title: 'Notification title',
    message: 'Notification message',
    Icon: <CircleStackIcon />
  }
}
