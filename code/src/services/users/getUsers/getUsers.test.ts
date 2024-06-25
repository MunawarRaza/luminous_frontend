import { UserAccountContract } from '@/contracts/UserAccount.contract'
import { axiosInstance } from '@/libs/axios/axios'
import { injectStore } from '@/libs/axios/axiosInterceptos'
import { store } from '@/store/store'
import MockAdapter from 'axios-mock-adapter'
import { UsersEndpoints } from '../users-endpoints'
import getUsers from './getUsers'

injectStore(store)

describe('getUsersService', () => {
  let mock: MockAdapter

  beforeEach(() => {
    mock = new MockAdapter(axiosInstance)
  })

  it('should get users list', async () => {
    const usersResponse: UserAccountContract[] = []
    mock.onGet(UsersEndpoints.USERS).reply(200, usersResponse)
    const response = await getUsers()
    expect(response.data).toEqual(usersResponse)
  })
})
