import { StoryObj } from '@storybook/react'
import ReportsTemplate from './ReportsTemplate'

export default {
  title: 'ReportsTemplate',
  component: ReportsTemplate
}

type Story = StoryObj<typeof ReportsTemplate>

export const Default: Story = {
  name: 'ReportsTemplate',
  args: {}
}
