import type { StoryObj } from '@storybook/react'
import TextareaInput from './TextareaInput'

export default {
  title: 'TextareaInput',
  component: TextareaInput
}

type Story = StoryObj<typeof TextareaInput>

export const DefaultTextarea: Story = {
  name: 'Base Textarea',
  args: {
    label: 'Message',
    placeholder: 'Enter a message',
    error: ''
  }
}

export const DisabledTextarea: Story = {
  args: {
    ...DefaultTextarea.args,
    disabled: true
  }
}
