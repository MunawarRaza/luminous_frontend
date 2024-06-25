import type { StoryObj } from '@storybook/react'
import { EnvelopeIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import Button from './Button'

export default {
  title: 'Button',
  component: Button
}

const leftIcon = <EnvelopeIcon />
const rightIcon = <ArrowRightIcon />
const onClick = () => alert('Clicked')

export const Default: StoryObj = {
  args: {
    label: 'Button',
    leftSection: leftIcon,
    rightSection: rightIcon,
    fullWidth: true,
    onClick
  }
}

export const Primary: StoryObj = {
  args: {
    label: 'Button',
    leftSection: leftIcon,
    rightSection: rightIcon,
    onClick
  }
}

export const Secondary: StoryObj = {
  args: {
    label: 'Button',
    secondary: true,
    leftSection: leftIcon,
    rightSection: rightIcon,
    sharped: false,
    onClick
  }
}

export const Outline: StoryObj = {
  args: {
    label: 'Button',
    outlined: true,
    leftSection: leftIcon,
    rightSection: rightIcon,
    onClick
  }
}

export const Sharped: StoryObj = {
  args: {
    label: 'Button',
    sharped: true,
    leftSection: leftIcon,
    rightSection: rightIcon,
    onClick
  }
}
