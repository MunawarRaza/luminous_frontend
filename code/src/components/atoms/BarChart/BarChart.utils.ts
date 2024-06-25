import { ChartResponseContract } from '@/contracts/charts/ChartResponse'
import { BarChartProps } from './BarChart.interfaces'
import { linearGradientDef } from '@nivo/core'

export const getDefs = (data: BarChartProps['data'], indexKey: string, isHorizontal?: boolean) => {
  return data.map((item) =>
    linearGradientDef(
      `gradient-${isHorizontal ? 'horizontal' : 'vertical'}-${item[indexKey]}`,
      [
        { offset: 0, color: 'hsl(198, 100%, 33%)' },
        { offset: 100, color: 'hsl(187, 87%, 53%)' }
      ],
      isHorizontal ? { gradientTransform: 'rotate(90 .5 .5)' } : undefined
    )
  )
}

// Generate fill rules to apply the gradients based on the indexKey
// export const getFills = (data: BarChartProps['data'], indexKey: string) => {
//   return data.map((item) => ({
//     match: {
//       id: indexKey,
//       indexValue: item[indexKey]
//     },
//     id: `gradient-${item[indexKey]}`
//   }))
// }

export const getBarChartData = (chartData: ChartResponseContract[], label: string) => {
  if (!chartData.length) return []

  return chartData
    .map(({ index, data }) => {
      return data.map((item) => ({
        [index]: item.key,
        [label]: item.value
      }))
    })
    .flat()
}
