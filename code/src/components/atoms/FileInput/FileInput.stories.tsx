import { StoryObj } from '@storybook/react'
import FileInput from './FileInput'

export default {
  title: 'FileInput',
  component: FileInput
}

type Story = StoryObj<typeof FileInput>

export const Default: Story = {
  name: 'FileInput',
  args: {
    label: 'File Input',
    placeholder: 'Choose file'
  }
}
