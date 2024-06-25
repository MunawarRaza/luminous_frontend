import { Meta, StoryObj } from '@storybook/react'
import RegisterTemplate from './RegisterTemplate'
import StoreProvider from '@/providers/StoreProvider'
import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6'

const meta: Meta<typeof RegisterTemplate> = {
  title: 'RegisterTemplate',
  component: RegisterTemplate,
  decorators: [
    (Story) => (
      <StoreProvider>
        <Story />
      </StoreProvider>
    ),
    withRouter
  ],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: {
        path: '/login',
        handle: 'Cancel'
      }
    })
  }
}

export default meta
type Story = StoryObj<typeof RegisterTemplate>

export const Default: Story = {
  name: 'Register Template',
  args: {}
}
