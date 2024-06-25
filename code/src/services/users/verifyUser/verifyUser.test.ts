import { axiosInstance } from '@/libs/axios/axios'
import { injectStore } from '@/libs/axios/axiosInterceptos'
import { store } from '@/store/store'
import MockAdapter from 'axios-mock-adapter'
import { UsersEndpoints } from '../users-endpoints'
import editUser from './verifyUser'

injectStore(store)

describe('verifyUserService', () => {
  let mock: MockAdapter

  beforeEach(() => {
    mock = new MockAdapter(axiosInstance)
  })

  it('should verify user', async () => {
    const userPayload = {
      admin_verified: true
    }
    const usersResponse = { id: 1, name: 'name', email: 'email', password: 'password' }
    mock.onPut(`${UsersEndpoints.USERS}/1`, userPayload).reply(200, usersResponse)
    const response = await editUser(userPayload, 1)
    expect(response.data).toEqual(usersResponse)
  })
})
