import { Meta, StoryObj } from '@storybook/react'
import DashboardTemplate from './DashboardTemplate'
import StoreProvider from '@/providers/StoreProvider'

const meta: Meta<typeof DashboardTemplate> = {
  title: 'DashboardTemplate',
  component: DashboardTemplate,
  decorators: [
    (Story) => (
      <StoreProvider>
        <Story />
      </StoreProvider>
    )
  ]
}

export default meta

type Story = StoryObj<typeof DashboardTemplate>

export const Default: Story = {
  name: 'DashboardTemplate',
  args: {}
}
