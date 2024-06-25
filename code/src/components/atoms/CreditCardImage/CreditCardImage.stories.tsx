import { StoryObj } from '@storybook/react'
import CreditCardImage from './CreditCardImage'

export default {
  title: 'CreditCardImage',
  component: CreditCardImage
}

type Story = StoryObj<typeof CreditCardImage>

export const DefaultImage: Story = {
  name: 'CreditCardImage',
  args: {
    cardType: 'visa'
  }
}
