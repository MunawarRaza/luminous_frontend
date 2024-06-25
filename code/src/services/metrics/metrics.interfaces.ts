import { ChartResponseContract } from '@/contracts/charts/ChartResponse'

export type ChartResponseData = ChartResponseContract[]
export interface MostFrequentData {
  data: {
    chat: string
    error: string
  }
}
