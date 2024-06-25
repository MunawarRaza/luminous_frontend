import { ChartResponseContract } from '@/contracts/charts/ChartResponse'
import { LineChartProps } from './LineChart.interfaces'
import { linearGradientDef } from '@nivo/core'

export const generateGradientsForArea = (data: LineChartProps['data']) => {
  return data.map((series) =>
    linearGradientDef(`area-${series.id}`, [
      { offset: 20, color: 'hsl(198, 98%, 36%)' },
      { offset: 100, color: 'rgba(255, 255, 255, .1)' }
    ])
  )
}

export const generateGradientsForLine = (data: LineChartProps['data']) => {
  return data.map((series) =>
    linearGradientDef(
      `line-${series.id}`,
      [
        { offset: 0, color: 'hsl(198, 98%, 36%)' },
        { offset: 50, color: 'hsl(198, 100%, 46%)' },
        { offset: 100, color: 'hsl(198, 98%, 36%)' }
      ],
      { gradientTransform: 'rotate(90 .5 .5)' }
    )
  )
}

export const generateFills = (data: LineChartProps['data']) => {
  return data.map((series) => ({
    match: {
      id: series.id
    },
    id: `area-${series.id}`
  }))
}

export const generateTicksFromData = (chartData: LineChartProps['data'] = [], step = 20) => {
  const yValues = chartData.reduce((acc: number[], dataset) => {
    const datasetYValues = dataset.data.map((point) => point.y as number)
    return acc.concat(datasetYValues)
  }, [])

  const maxValue = Math.max(...yValues)

  const rangeEnd = Math.ceil(maxValue / step) * step

  const ticks = []
  for (let i = 0; i <= rangeEnd; i += step) {
    ticks.push(i)
  }
  return ticks
}

export const getLineChartData = (chartData: ChartResponseContract[]) => {
  return chartData.map(({ index, data }) => {
    return {
      id: index,
      data: data.map((item) => ({
        x: item.key,
        y: item.value
      }))
    }
  })
}
