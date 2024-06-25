import type { StoryObj } from '@storybook/react'
import DatePicker from './DatePicker'

export default {
  title: 'DatePicker',
  component: DatePicker
}

export const Default = {}

export const SingleDate: StoryObj = {
  args: {
    label: 'Date Picker',
    placeholder: 'Select date',
    required: true
  }
}

export const RangeDate: StoryObj = {
  args: {
    label: 'Date Picker',
    placeholder: 'Start date → End date',
    type: 'range'
  }
}

export const WithError: StoryObj = {
  args: {
    label: 'Date Picker',
    placeholder: 'Pick a date',
    error: 'Error message'
  }
}

export const Sharped: StoryObj = {
  args: {
    label: 'Date Picker',
    placeholder: 'Pick a date',
    sharped: true
  }
}

export const Disabled: StoryObj = {
  args: {
    label: 'Date Picker',
    placeholder: 'Start date → End date',
    disabled: true
  }
}
