import { StoryObj } from '@storybook/react'
import BarChart from './BarChart'

export default {
  title: 'BarChart',
  component: BarChart
}

type Story = StoryObj<typeof BarChart>

export const Default: Story = {
  name: 'Basic Bar Chart',
  args: {
    indexKey: 'month',
    data: [
      {
        month: 'Jun',
        review: 50
      },
      {
        month: 'Jul',
        review: 80
      },
      {
        month: 'Aug',
        review: 60
      },
      {
        month: 'Sep',
        review: 100
      },
      {
        month: 'Oct',
        review: 20
      },
      {
        month: 'Nov',
        review: 40
      },
      {
        month: 'Dec',
        review: 70
      }
    ]
  }
}

export const WithGradient: Story = {
  args: {
    ...Default.args,
    hasGradient: true
  }
}

export const Horizontal: Story = {
  args: {
    ...Default.args,
    isHorizontal: true,
    hasGradient: true
  }
}
