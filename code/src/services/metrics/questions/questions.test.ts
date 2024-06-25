import MockAdapter from 'axios-mock-adapter'
import { axiosInstance } from '@/libs/axios/axios'
import { injectStore } from '@/libs/axios/axiosInterceptos'
import { ChartResponseData } from '../metrics.interfaces'
import { MetricsEndpoints } from '../metrics-endpoints.enums'
import { store } from '@/store/store'
import getQuestionsMetrics from './questions'

injectStore(store)

const chartResponseData: ChartResponseData = [
  {
    index: 'month',
    data: [
      {
        key: 'January',
        value: 2
      },
      {
        key: 'February',
        value: 4
      }
    ]
  }
]

describe('QuestionsMetricsService', () => {
  let mock: MockAdapter

  beforeEach(() => {
    mock = new MockAdapter(axiosInstance)
  })

  it('should return a list of questions data', async () => {
    mock.onGet(MetricsEndpoints.QUESTIONS).reply(200, chartResponseData)

    const response = await getQuestionsMetrics()
    expect(response.data).toEqual(chartResponseData)
  })
})
