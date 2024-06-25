import { requests } from '@/libs/axios/axios'
import { AxiosResponse } from 'axios'
import { MetricsEndpoints } from '../metrics-endpoints.enums'
import { MostFrequentData } from '../metrics.interfaces'

const getChatMetrics = async (): Promise<AxiosResponse<MostFrequentData>> => {
  return requests.get(MetricsEndpoints.CHAT)
}

export default getChatMetrics
