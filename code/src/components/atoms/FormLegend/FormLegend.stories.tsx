import { StoryObj } from '@storybook/react'
import FormLegend from './FormLegend'

export default {
  title: 'FormLegend',
  component: FormLegend
}

type Story = StoryObj<typeof FormLegend>

export const Default: Story = {
  name: 'FormLegend',
  args: {
    title: 'Form Legend'
  }
}
