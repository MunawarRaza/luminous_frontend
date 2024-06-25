import { withRouter } from 'storybook-addon-react-router-v6'
import { StoryObj } from '@storybook/react'
import MfaModal from './MfaModal'

export default {
  title: 'MfaModal',
  component: MfaModal,
  decorators: [withRouter]
}

type Story = StoryObj<typeof MfaModal>

export const DefaultForm: Story = {
  name: 'MFA Modal',
  args: {}
}

export const FormWithError: Story = {
  name: 'MFA Modal',
  args: {
    message: 'MFA Verification Failed'
  }
}
