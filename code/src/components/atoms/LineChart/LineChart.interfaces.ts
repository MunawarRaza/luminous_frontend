import { LineProps, Serie } from '@nivo/line'

interface GradientSerie extends Serie {
  colorStart?: string
  colorEnd?: string
}

export interface ILineChartProps {
  data: GradientSerie[]
  showLegend?: boolean
  tickGap?: number
  hasGradient?: boolean
  height?: number | string
}

export type LineChartProps = ILineChartProps & LineProps
