import { StoryObj } from '@storybook/react'
import Checkbox from './Checkbox'

export default {
  title: 'Checkbox',
  component: Checkbox
}

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  name: 'Checkbox',
  args: {
    label: 'Checkbox'
  }
}
