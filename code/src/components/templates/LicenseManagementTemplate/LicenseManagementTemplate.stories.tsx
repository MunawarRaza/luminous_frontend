import { StoryObj } from '@storybook/react'
import LicenseManagementTemplate from './LicenseManagementTemplate'

export default {
  title: 'LicenseManagementTemplate',
  component: LicenseManagementTemplate
}

type Story = StoryObj<typeof LicenseManagementTemplate>

export const Default: Story = {
  name: 'License Management Template',
  args: {}
}
