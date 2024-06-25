import { StoryObj } from '@storybook/react'
import RegularInput from './RegularInput'

export default {
  title: 'RegularInput',
  component: RegularInput
}

type Story = StoryObj<typeof RegularInput>

export const DefaultInput: Story = {
  name: 'Base input',
  args: {
    type: 'text',
    label: 'Name',
    placeholder: 'Enter your name',
    error: ''
  }
}

export const DisabledInput: Story = {
  name: 'Disabled input',
  args: {
    ...DefaultInput.args,
    disabled: true
  }
}
