import { Meta, StoryObj } from '@storybook/react'
import SideNavigation from './SideNavigation'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta: Meta = {
  title: 'SideNavigation',
  component: SideNavigation,
  decorators: [withRouter]
}

export default meta
type Story = StoryObj<typeof SideNavigation>

export const Default: Story = {
  name: 'Sidebar collapsed (default)',
  args: {
    expanded: false
  }
}

export const Expanded: Story = {
  name: 'Sidebar expanded',
  args: {
    expanded: true
  }
}
