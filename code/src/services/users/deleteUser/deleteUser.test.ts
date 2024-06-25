import { axiosInstance } from '@/libs/axios/axios'
import { injectStore } from '@/libs/axios/axiosInterceptos'
import { store } from '@/store/store'
import MockAdapter from 'axios-mock-adapter'
import { deleteUser } from './deleteUser'
import { UsersEndpoints } from '../users-endpoints'

injectStore(store)

describe('deleteUserService', () => {
  let mock: MockAdapter

  beforeEach(() => {
    mock = new MockAdapter(axiosInstance)
  })

  it('should delete user', async () => {
    const usersResponse = { id: 1, name: 'name', email: 'email', password: 'password' }
    mock.onDelete(`${UsersEndpoints.USERS}/1`).reply(200, usersResponse)
    const response = await deleteUser(1)
    expect(response.data).toEqual(usersResponse)
  })
})
