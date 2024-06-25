import { StoryObj } from '@storybook/react'
import LineChart from './LineChart'

export default {
  title: 'LineChart',
  component: LineChart
}

type Story = StoryObj<typeof LineChart>

export const SimpleChart: Story = {
  name: 'Simple Line Chart',
  args: {
    data: [
      {
        id: 'Year',
        data: [
          { x: 'Aug', y: 56 },
          { x: 'Sept', y: 85 },
          { x: 'Oct', y: 108 },
          { x: 'Nov', y: 59 }
        ]
      }
    ]
  }
}

export const GradientChart: Story = {
  name: 'Line Chart with gradient',
  args: {
    hasGradient: true,
    data: [
      {
        id: 'Year',
        colorStart: 'hsl(198, 100%, 46%)',
        colorEnd: 'hsl(198, 98%, 36%)',
        data: [
          { x: 'Aug', y: 56 },
          { x: 'Sept', y: 85 },
          { x: 'Oct', y: 108 },
          { x: 'Nov', y: 59 }
        ]
      }
    ]
  }
}
