import { AxiosResponse } from 'axios'
import { MetricsEndpoints } from '../metrics-endpoints.enums'
import { requests } from '@/libs/axios/axios'
import { ChartResponseData } from '../metrics.interfaces'

const getAuditsMetrics = async (): Promise<AxiosResponse<ChartResponseData>> => {
  return requests.get(MetricsEndpoints.AUDITS)
}

export default getAuditsMetrics
