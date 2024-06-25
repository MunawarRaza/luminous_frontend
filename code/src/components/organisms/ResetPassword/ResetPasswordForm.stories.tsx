import { StoryObj } from '@storybook/react'
import ResetPassword from './ResetPasswordForm.tsx'

export default {
  title: 'ForgotPassword',
  component: ResetPassword
}

type Story = StoryObj<typeof ResetPassword>

export const Default: Story = {
  name: 'ForgotPassword',
  args: {}
}
