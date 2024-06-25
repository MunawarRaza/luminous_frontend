import { StoryObj } from '@storybook/react'
import ResetPasswordFormTemplate from './ResetPasswordFormTemplate.tsx'

export default {
  title: 'ForgotPasswordForm',
  component: ResetPasswordFormTemplate
}

type Story = StoryObj<typeof ResetPasswordFormTemplate>

export const Default: Story = {
  name: 'ForgotPasswordForm',
  args: {}
}
