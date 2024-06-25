import MockAdapter from 'axios-mock-adapter'
import getAuditsMetrics from './audits'
import { axiosInstance } from '@/libs/axios/axios'
import { injectStore } from '@/libs/axios/axiosInterceptos'
import { ChartResponseData } from '../metrics.interfaces'
import { MetricsEndpoints } from '../metrics-endpoints.enums'
import { store } from '@/store/store'

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

describe('AuditsMetricsService', () => {
  let mock: MockAdapter

  beforeEach(() => {
    mock = new MockAdapter(axiosInstance)
  })

  it('should return a list of audits data', async () => {
    mock.onGet(MetricsEndpoints.AUDITS).reply(200, chartResponseData)

    const response = await getAuditsMetrics()
    expect(response.data).toEqual(chartResponseData)
  })
})
