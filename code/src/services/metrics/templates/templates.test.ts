import MockAdapter from 'axios-mock-adapter'
import { axiosInstance } from '@/libs/axios/axios'
import { injectStore } from '@/libs/axios/axiosInterceptos'
import { ChartResponseData } from '../metrics.interfaces'
import { MetricsEndpoints } from '../metrics-endpoints.enums'
import { store } from '@/store/store'
import getTemplatesMetrics from './templates'

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

describe('TemplatesMetricsService', () => {
  let mock: MockAdapter

  beforeEach(() => {
    mock = new MockAdapter(axiosInstance)
  })

  it('should return a list of templates data', async () => {
    mock.onGet(MetricsEndpoints.TEMPLATES).reply(200, chartResponseData)

    const response = await getTemplatesMetrics()
    expect(response.data).toEqual(chartResponseData)
  })
})
