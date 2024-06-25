import { StoryObj } from '@storybook/react'
import Badge from './Badge'

export default {
  title: 'Badge',
  component: Badge
}

type Story = StoryObj<typeof Badge>

export const Default: Story = {
  name: 'Badge',
  args: {
    color: 'blue',
    children: 'Salesman'
  }
}
