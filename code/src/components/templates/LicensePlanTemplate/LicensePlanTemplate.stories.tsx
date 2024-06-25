import { StoryObj } from '@storybook/react'
import LicensePlanTemplate from './LicensePlanTemplate'

export default {
  title: 'LicensePlanTemplate',
  component: LicensePlanTemplate
}

type Story = StoryObj<typeof LicensePlanTemplate>

export const Default: Story = {
  name: 'License Plan template',
  args: {}
}
