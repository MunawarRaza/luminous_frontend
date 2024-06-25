import { USER_ROLES } from '@/enums/userRoles'
import { axiosInstance } from '@/libs/axios/axios'
import { injectStore } from '@/libs/axios/axiosInterceptos'
import { store } from '@/store/store'
import MockAdapter from 'axios-mock-adapter'
import { UsersEndpoints } from '../users-endpoints'
import editUser from './editUser'

injectStore(store)

describe('editUserService', () => {
  let mock: MockAdapter

  beforeEach(() => {
    mock = new MockAdapter(axiosInstance)
  })

  it('should edit user', async () => {
    const userPayload = {
      name: 'name',
      email: 'email',
      phone_number: 'phone_number',
      job_title: 'test title',
      role: USER_ROLES.ORG_ADMIN
    }
    const usersResponse = { id: 1, name: 'name', email: 'email', password: 'password' }
    mock.onPut(`${UsersEndpoints.USERS}/1`, userPayload).reply(200, usersResponse)
    const response = await editUser(userPayload, 1)
    expect(response.data).toEqual(usersResponse)
  })
})
