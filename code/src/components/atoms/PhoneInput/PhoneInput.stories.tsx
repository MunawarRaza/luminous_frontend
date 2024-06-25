import { StoryObj } from '@storybook/react'
import PhoneInput from './PhoneInput'

export default {
  title: 'PhoneInput',
  component: PhoneInput
}

type Story = StoryObj<typeof PhoneInput>

export const DefaultPhoneInput: Story = {
  name: 'Base phone input',
  args: {
    label: 'Phone Number',
    placeholder: 'Enter your phone number',
    error: '',
    smoothed: true,
    initialValue: ''
  }
}

export const SharpedPhoneInput: Story = {
  name: 'Sharped phone input',
  args: {
    ...DefaultPhoneInput.args,
    smoothed: false
  }
}

export const DisabledPhoneInput: Story = {
  name: 'Disabled phone input',
  args: {
    ...DefaultPhoneInput.args,
    disabled: true
  }
}

export const PhoneInputWithError: Story = {
  args: {
    ...DefaultPhoneInput.args,
    error: 'Error Message'
  }
}
