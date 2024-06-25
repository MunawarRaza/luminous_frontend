import { requests } from '@/libs/axios/axios'
import { MetricsEndpoints } from '../metrics-endpoints.enums'
import { AxiosResponse } from 'axios'
import { ChartResponseData } from '../metrics.interfaces'

const getTemplatesMetrics = async (): Promise<AxiosResponse<ChartResponseData>> => {
  return requests.get(MetricsEndpoints.TEMPLATES)
}

export default getTemplatesMetrics
