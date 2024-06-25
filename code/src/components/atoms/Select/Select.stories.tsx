import { StoryObj } from '@storybook/react'
import Select from './Select'

export default {
  title: 'Select',
  component: Select
}

type Story = StoryObj<typeof Select>

export const Default: Story = {
  name: 'Select',
  args: {
    options: ['Value 1', 'value 2', { label: 'this is value 3', value: 'value 3' }],
    label: 'Label select',
    placeholder: 'Placeholder select'
  }
}
