import MockAdapter from 'axios-mock-adapter'
import { axiosInstance } from '@/libs/axios/axios'
import { injectStore } from '@/libs/axios/axiosInterceptos'
import { ChartResponseData } from '../metrics.interfaces'
import { MetricsEndpoints } from '../metrics-endpoints.enums'
import { store } from '@/store/store'
import getErrorsMetrics from './errors'

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

describe('ErrorsMetricsService', () => {
  let mock: MockAdapter

  beforeEach(() => {
    mock = new MockAdapter(axiosInstance)
  })

  it('should return a list of errors data', async () => {
    mock.onGet(MetricsEndpoints.ERRORS).reply(200, chartResponseData)

    const response = await getErrorsMetrics()
    expect(response.data).toEqual(chartResponseData)
  })
})
