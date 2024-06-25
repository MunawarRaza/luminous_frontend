import { AxiosResponse } from 'axios'
import { ChartResponseData } from '../metrics.interfaces'
import { requests } from '@/libs/axios/axios'
import { MetricsEndpoints } from '../metrics-endpoints.enums'

const getQuestionsMetrics = async (): Promise<AxiosResponse<ChartResponseData>> => {
  return requests.get(MetricsEndpoints.QUESTIONS)
}

export default getQuestionsMetrics
