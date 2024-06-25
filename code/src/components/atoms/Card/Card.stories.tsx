import { StoryObj } from '@storybook/react'
import Card from './Card'

export default {
  title: 'Card',
  component: Card
}

type Story = StoryObj<typeof Card>

export const DefaultCard: Story = {
  name: 'Base card',
  args: {
    children: 'Card content'
  }
}
