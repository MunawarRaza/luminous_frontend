import { StoryObj } from '@storybook/react'
import ToggleTheme from './ToggleTheme'

export default {
  title: 'ToggleTheme',
  component: ToggleTheme
}

type Story = StoryObj<typeof ToggleTheme>

export const Default: Story = {
  name: 'ToggleTheme',
  args: {}
}
