import { withRouter } from 'storybook-addon-react-router-v6'
import { StoryFn, StoryObj } from '@storybook/react'
import LoginForm from './LoginForm'
import StoreProvider from '@/providers/StoreProvider'

export default {
  title: 'LoginForm',
  component: LoginForm,
  decorators: [
    (Story: StoryFn) => (
      <StoreProvider>
        <Story />
      </StoreProvider>
    ),
    withRouter
  ]
}

type Story = StoryObj<typeof LoginForm>

export const DefaultForm: Story = {
  name: 'Login Form',
  args: {}
}

export const FormWithError: Story = {
  name: 'Login Form with error',
  args: {
    message: 'Login Failed'
  }
}
