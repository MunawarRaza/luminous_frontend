export interface ChartDataContract {
  key: string
  value: number | string
}

export interface ChartResponseContract {
  index: string
  data: ChartDataContract[]
}
