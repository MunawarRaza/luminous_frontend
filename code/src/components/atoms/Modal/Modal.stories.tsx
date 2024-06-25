import { StoryObj } from '@storybook/react'
import Modal from './Modal'

export default {
  title: 'Modal',
  component: Modal
}

type Story = StoryObj<typeof Modal>

export const Default: Story = {
  name: 'Modal',
  args: {
    title: 'Modal title',
    children: 'Example modal content',
    isOpen: true
  }
}
