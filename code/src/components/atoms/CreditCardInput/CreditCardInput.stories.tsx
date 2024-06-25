import { StoryObj } from '@storybook/react'
import CreditCardInput from './CreditCardInput'

export default {
  title: 'CreditCardInput',
  component: CreditCardInput
}

type Story = StoryObj<typeof CreditCardInput>

export const DefaultInput: Story = {
  name: 'CreditCardInput',
  args: {
    label: 'Card Number',
    placeholder: '0000 0000 0000 0000'
  }
}
