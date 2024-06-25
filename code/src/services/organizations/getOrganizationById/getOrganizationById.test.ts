import { Organization } from '@/contracts/Organization.contract'
import { axiosInstance } from '@/libs/axios/axios'
import { injectStore } from '@/libs/axios/axiosInterceptos'
import { store } from '@/store/store'
import MockAdapter from 'axios-mock-adapter'
import { OrganizationsEndpoints } from '../organizations-endpoints'
import getOrganizationById from './getOrganizationById'

injectStore(store)

describe('getOrganizationByIdService', () => {
  let mock: MockAdapter

  beforeEach(() => {
    mock = new MockAdapter(axiosInstance)
  })

  it('should get an organization', async () => {
    const organizationResponse: Organization[] = []
    mock.onGet(`${OrganizationsEndpoints.ORGANIZATION}/1`).reply(200, organizationResponse)
    const response = await getOrganizationById(1)
    expect(response.data).toEqual(organizationResponse)
  })
})
