import { UserAccountContract } from '@/contracts/UserAccount.contract'
import { axiosInstance } from '@/libs/axios/axios'
import { injectStore } from '@/libs/axios/axiosInterceptos'
import { store } from '@/store/store'
import MockAdapter from 'axios-mock-adapter'
import { OrganizationsEndpoints } from '../organizations-endpoints'
import getOrganizationUsers from './getOrganizationUsers'

injectStore(store)

describe('getOrganizationUsersService', () => {
  let mock: MockAdapter

  beforeEach(() => {
    mock = new MockAdapter(axiosInstance)
  })

  it('should get an organization', async () => {
    const organizationResponse: UserAccountContract[] = []
    mock.onGet(`${OrganizationsEndpoints.ORGANIZATIONS}/1/users`).reply(200, organizationResponse)
    const response = await getOrganizationUsers(1, 10)
    expect(response.data).toEqual(organizationResponse)
  })
})
