import { Meta, StoryObj } from '@storybook/react'
import LoginTemplate from './LoginTemplate'
import StoreProvider from '@/providers/StoreProvider'
import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6'

const meta: Meta<typeof LoginTemplate> = {
  title: 'LoginTemplate',
  component: LoginTemplate,
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
        path: '/register',
        handle: 'Sign up'
      }
    })
  }
}

export default meta
type Story = StoryObj<typeof LoginTemplate>

export const Default: Story = {
  name: 'Login Template',
  args: {}
}
