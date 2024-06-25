import { Meta, StoryObj } from '@storybook/react'
import RegisterForm from './RegisterForm'
import StoreProvider from '@/providers/StoreProvider'

const meta: Meta<typeof RegisterForm> = {
  title: 'RegisterForm',
  component: RegisterForm,
  decorators: [
    (Story) => (
      <StoreProvider>
        <Story />
      </StoreProvider>
    )
  ]
}

export default meta
type Story = StoryObj<typeof RegisterForm>

export const Default: Story = {
  name: 'Register Form',
  args: {}
}

export const WithError: Story = {
  name: 'Register Form with error',
  args: {
    message: 'There is an error'
  }
}
