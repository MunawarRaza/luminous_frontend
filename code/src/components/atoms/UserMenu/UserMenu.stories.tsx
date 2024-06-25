import { Meta, StoryObj } from '@storybook/react'
import UserMenu from './UserMenu'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta: Meta = {
  title: 'UserMenu',
  component: UserMenu,
  decorators: [withRouter]
}

export default meta
type Story = StoryObj<typeof UserMenu>

export const Default: Story = {
  name: 'UserMenu',
  args: {
    user: {
      name: 'John Doe',
      email: 'thelea12@gmail.com',
      avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
    }
  }
}
