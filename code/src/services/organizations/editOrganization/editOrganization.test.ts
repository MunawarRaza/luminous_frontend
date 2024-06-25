import { axiosInstance } from '@/libs/axios/axios'
import { injectStore } from '@/libs/axios/axiosInterceptos'
import { store } from '@/store/store'
import MockAdapter from 'axios-mock-adapter'
import { OrganizationsEndpoints } from '../organizations-endpoints'
import editOrganization from './editOrganization'

injectStore(store)

describe('editOrganizationService', () => {
  let mock: MockAdapter

  beforeEach(() => {
    mock = new MockAdapter(axiosInstance)
  })

  it('should edit organization', async () => {
    const organizationPayload = {
      organization_name: 'name',
      email: 'email',
      phone: 'phone_number',
      address: 'test address'
    }
    const organizationResponse = {
      id: 1,
      organization_name: 'name',
      email: 'email',
      address: 'address',
      phone: 'phone'
    }
    mock.onPut(`${OrganizationsEndpoints.ORGANIZATIONS}/1`, organizationPayload).reply(200, organizationResponse)
    const response = await editOrganization(organizationPayload, 1)
    expect(response.data).toEqual(organizationResponse)
  })
})
