import { StoryObj } from '@storybook/react'
import StepsProgress from './StepsProgress'

export default {
  title: 'StepsProgress',
  component: StepsProgress
}

type Story = StoryObj<typeof StepsProgress>

export const Default: Story = {
  name: 'Steps Progress',
  args: {
    steps: [
      { id: 1, title: 'Step 1' },
      { id: 2, title: 'Step 2' },
      { id: 3, title: 'Step 3' }
    ],
    currentStep: 1
  }
}

export const Completed: Story = {
  name: 'Steps Progress in last step',
  args: {
    steps: [
      { id: 1, title: 'Step 1' },
      { id: 2, title: 'Step 2' },
      { id: 3, title: 'Step 3' }
    ],
    currentStep: 3
  }
}
