import MockAdapter from 'axios-mock-adapter'
import { axiosInstance } from '@/libs/axios/axios'
import { injectStore } from '@/libs/axios/axiosInterceptos'
import { ChartResponseData } from '../metrics.interfaces'
import { MetricsEndpoints } from '../metrics-endpoints.enums'
import { store } from '@/store/store'
import getUsageMetrics from './usage'

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

describe('UsageMetricsService', () => {
  let mock: MockAdapter

  beforeEach(() => {
    mock = new MockAdapter(axiosInstance)
  })

  it('should return a list of usage data', async () => {
    mock.onGet(MetricsEndpoints.USAGE).reply(200, chartResponseData)

    const response = await getUsageMetrics()
    expect(response.data).toEqual(chartResponseData)
  })
})
