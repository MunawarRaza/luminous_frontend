import { Meta, StoryObj } from '@storybook/react'
import MenuItem from './MenuItem'
import { Squares2X2Icon } from '@heroicons/react/24/outline'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta: Meta = {
  title: 'MenuItem',
  component: MenuItem,
  decorators: [withRouter]
}

export default meta
type Story = StoryObj<typeof MenuItem>

export const Default: Story = {
  name: 'MenuItem',
  args: {
    title: 'Example menu',
    href: '/example',
    Icon: <Squares2X2Icon aria-label="example-icon" />
  }
}
