import { AxiosResponse } from 'axios'
import { ChartResponseData } from '../metrics.interfaces'
import { MetricsEndpoints } from '../metrics-endpoints.enums'
import { requests } from '@/libs/axios/axios'

const getErrorsMetrics = async (): Promise<AxiosResponse<ChartResponseData>> => {
  return requests.get(MetricsEndpoints.ERRORS)
}

export default getErrorsMetrics
