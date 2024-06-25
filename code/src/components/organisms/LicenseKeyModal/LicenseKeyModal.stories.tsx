import { StoryObj } from '@storybook/react'
import LicenseKeyModal from './LicenseKeyModal'

export default {
  title: 'LicenseKeyModal',
  component: LicenseKeyModal
}

type Story = StoryObj<typeof LicenseKeyModal>

export const Default: Story = {
  name: 'License key modal',
  args: {
    isApplied: false
  }
}

export const Applied: Story = {
  name: 'License key modal applied',
  args: {
    isApplied: true
  }
}
