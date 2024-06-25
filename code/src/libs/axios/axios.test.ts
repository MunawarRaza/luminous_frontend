import MockAdapter from 'axios-mock-adapter'
import { TIMEOUT, axiosInstance, requests } from './axios'
import { API_URL } from '@/constants/API_URL'
import { injectStore } from './axiosInterceptos'
import { store } from '@/store/store'

injectStore(store)

describe('Axios instance', () => {
  let mock: MockAdapter

  beforeEach(() => {
    mock = new MockAdapter(axiosInstance)
  })

  it('Should have correct configuration', () => {
    expect(axiosInstance.defaults.baseURL).toEqual(API_URL)
    expect(axiosInstance.defaults.timeout).toEqual(TIMEOUT)
  })

  it('should handle GET requests correctly', async () => {
    const mockData = { data: 'response' }
    mock.onGet('/get').reply(200, mockData)

    const response = await requests.get('/get')
    expect(response.data).toEqual(mockData)
  })

  it('should handle POST requests correctly', async () => {
    const mockPayload = { data: 'payload' }
    const mockData = { data: 'response' }
    mock.onPost('/post', mockPayload).reply(200, mockData)

    const response = await requests.post('/post', mockPayload)
    expect(response.data).toEqual(mockData)
  })

  it('should handle PUT requests correctly', async () => {
    const mockPayload = { data: 'payload' }
    const mockData = { data: 'response' }
    mock.onPut('/put', mockPayload).reply(200, mockData)

    const response = await requests.put('/put', mockPayload)
    expect(response.data).toEqual(mockData)
  })

  it('should handle PATCH requests correctly', async () => {
    const mockPayload = { data: 'payload' }
    const mockData = { data: 'response' }
    mock.onPatch('/patch', mockPayload).reply(200, mockData)

    const response = await requests.patch('/patch', mockPayload)
    expect(response.data).toEqual(mockData)
  })

  it('should handle DELETE requests correctly', async () => {
    const mockData = { data: 'response' }
    mock.onDelete('/delete', { id: 1 }).reply(200, mockData)

    const response = await requests.delete(`/delete`)
    expect(response.data).toEqual(mockData)
  })
})
