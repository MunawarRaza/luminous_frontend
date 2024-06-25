import { StoryObj } from '@storybook/react'
import PageTitle from './PageTitle'

export default {
  title: 'PageTitle',
  component: PageTitle
}

type Story = StoryObj<typeof PageTitle>

export const Default: Story = {
  name: 'PageTitle',
  args: {
    title: 'Page Title'
  }
}
