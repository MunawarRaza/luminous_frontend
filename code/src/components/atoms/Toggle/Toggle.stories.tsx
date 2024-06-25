import { StoryObj } from '@storybook/react'
import Toggle from './Toggle'

export default {
  title: 'Toggle',
  component: Toggle
}

type Story = StoryObj<typeof Toggle>

export const DefaultToggle: Story = {
  name: 'Default toggle',
  args: {
    label: 'Toggle',
    disabled: false,
    helper: 'Helper text',
    error: ''
  }
}

export const DisabledToggle: Story = {
  name: 'Disabled toggle',
  args: {
    ...DefaultToggle.args,
    label: 'This is disabled',
    disabled: true
  }
}
