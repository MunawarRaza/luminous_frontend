import { withRouter } from 'storybook-addon-react-router-v6'
import { StoryObj } from '@storybook/react'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import AlertMessage from './AlertMessage'

export default {
  title: 'AlertMessage',
  component: AlertMessage,
  decorators: [withRouter]
}

export const Default: StoryObj = {
  args: {
    title: 'Title alert',
    children: 'Alert message',
    show: true
  }
}

export const Success: StoryObj = {
  args: {
    ...Default.args,
    icon: <InformationCircleIcon />,
    variant: 'success'
  }
}

export const Warning: StoryObj = {
  args: {
    ...Success.args,
    variant: 'warning'
  }
}

export const Error: StoryObj = {
  args: {
    ...Success.args,
    variant: 'error'
  }
}
