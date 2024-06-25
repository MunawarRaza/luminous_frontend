import { StoryObj } from '@storybook/react'
import ContactUsModal from './ContactUsModal'

export default {
  title: 'ContactUsModal',
  component: ContactUsModal
}

type Story = StoryObj<typeof ContactUsModal>

export const Default: Story = {
  name: 'ContactUsModal',
  args: {}
}
