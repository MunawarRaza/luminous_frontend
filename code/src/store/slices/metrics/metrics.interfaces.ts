import { ChartResponseContract } from '@/contracts/charts/ChartResponse'

type ChartData = ChartResponseContract[]

export interface MetricsState {
  usage: ChartData
  audits: ChartData
  templates: ChartData
  mostFrequent: {
    question: string
    error: string
  }
  errors: ChartData
  questions: ChartData
  error: string | null
}
