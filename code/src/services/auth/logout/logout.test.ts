import { axiosInstance } from '@/libs/axios/axios'
import MockAdapter from 'axios-mock-adapter'
import { AuthEndpoints } from '../auth-endpoints.enums'
import { injectStore } from '@/libs/axios/axiosInterceptos'
import { store } from '@/store/store'
import logout from './logout'

injectStore(store)

describe('logoutService', () => {
  let mock: MockAdapter

  beforeEach(() => {
    mock = new MockAdapter(axiosInstance)
  })

  it('should logout the user', async () => {
    const payload = {
      accessToken: 'token'
    }

    const logoutResponse = true

    mock.onPost(AuthEndpoints.LOGOUT, payload).reply(200, logoutResponse)
    const response = await logout(payload.accessToken)
    expect(response.data).toEqual(logoutResponse)
  })

  it("shouldn't logout the user if the token is not passed", async () => {
    const payload = {
      accessToken: ''
    }

    const logoutResponse = false

    mock.onPost(AuthEndpoints.LOGOUT, payload).reply(200, logoutResponse)
    const response = await logout(payload.accessToken)
    expect(response.data).toEqual(logoutResponse)
  })
})
