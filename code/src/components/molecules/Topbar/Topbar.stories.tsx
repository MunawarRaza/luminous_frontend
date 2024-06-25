import { Meta, StoryObj } from '@storybook/react'
import Topbar from './Topbar'
import StoreProvider from '@/providers/StoreProvider'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta: Meta<typeof Topbar> = {
  title: 'Topbar',
  component: Topbar,
  decorators: [
    (Story) => (
      <StoreProvider>
        <Story />
      </StoreProvider>
    ),
    withRouter
  ]
}

export default meta
type Story = StoryObj<typeof Topbar>

export const Default: Story = {
  name: 'Topbar',
  args: {}
}
