import { StoryObj } from '@storybook/react'
import Fieldset from './Fieldset'

export default {
  title: 'Fieldset',
  component: Fieldset
}

type Story = StoryObj<typeof Fieldset>

export const Default: Story = {
  name: 'Fieldset',
  args: {
    legend: 'Legend'
  }
}
