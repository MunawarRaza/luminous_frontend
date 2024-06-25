import { StoryObj } from '@storybook/react'
import Logo from './Logo'

export default {
  title: 'Logo',
  component: Logo
}

type Story = StoryObj<typeof Logo>

export const Default: Story = {
  name: 'Logo',
  args: {
    width: '150px',
    height: '100%',
    alt: 'Codexa logo'
  }
}
