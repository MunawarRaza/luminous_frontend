import { BarDatum, ResponsiveBarSvgProps } from '@nivo/bar'

interface IBarChartProps {
  data: readonly BarDatum[]
  hasLegend?: boolean
  hasGradient?: boolean
  isHorizontal?: boolean
  height?: number | string
  indexKey: string
}

export type BarChartProps = IBarChartProps & ResponsiveBarSvgProps<BarDatum>
