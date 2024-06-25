import { USER_ROLES } from '@/enums/userRoles'
import { axiosInstance } from '@/libs/axios/axios'
import { injectStore } from '@/libs/axios/axiosInterceptos'
import { store } from '@/store/store'
import MockAdapter from 'axios-mock-adapter'
import { UsersEndpoints } from '../users-endpoints'
import createUser from './createUser'

injectStore(store)

describe('createUserService', () => {
  let mock: MockAdapter

  beforeEach(() => {
    mock = new MockAdapter(axiosInstance)
  })

  it('should create user', async () => {
    const userPayload = {
      name: 'name',
      email: 'email',
      phone_number: 'phone_number',
      job_title: 'test_title',
      role: USER_ROLES.ORG_ADMIN,
      password: 'password'
    }
    const organizationId = '1'
    const usersResponse = { name: 'name', email: 'email', password: 'password' }
    mock.onPost(`${UsersEndpoints.ORGANIZATIONS}/${organizationId}/users`, userPayload).reply(200, usersResponse)
    const response = await createUser(userPayload, organizationId)
    expect(response.data).toEqual(usersResponse)
  })
})
