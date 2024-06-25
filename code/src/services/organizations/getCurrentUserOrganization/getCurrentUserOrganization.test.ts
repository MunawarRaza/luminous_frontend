import { Organization } from '@/contracts/Organization.contract'
import { axiosInstance } from '@/libs/axios/axios'
import { injectStore } from '@/libs/axios/axiosInterceptos'
import { store } from '@/store/store'
import MockAdapter from 'axios-mock-adapter'
import { OrganizationsEndpoints } from '../organizations-endpoints'
import getCurrentUserOrganization from './getCurrentUserOrganization'

injectStore(store)

describe('getCurrentUserOrganizationService', () => {
  let mock: MockAdapter

  beforeEach(() => {
    mock = new MockAdapter(axiosInstance)
  })

  it('should get the organization of the current logged in user', async () => {
    const organizationResponse: Organization[] = []
    mock.onGet(`${OrganizationsEndpoints.AUTH}/user`).reply(200, organizationResponse)
    const response = await getCurrentUserOrganization()
    expect(response.data).toEqual(organizationResponse)
  })
})
