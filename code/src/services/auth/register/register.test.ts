import { axiosInstance } from '@/libs/axios/axios'
import MockAdapter from 'axios-mock-adapter'
import { AuthEndpoints } from '../auth-endpoints.enums'
import { injectStore } from '@/libs/axios/axiosInterceptos'
import { store } from '@/store/store'
import register from './register'

injectStore(store)

describe('registerService', () => {
  let mock: MockAdapter
  beforeEach(() => {
    mock = new MockAdapter(axiosInstance)
  })

  it('should register the user', async () => {
    const registerPayload = {
      email: 'test@mail.com',
      jobTitle: 'Developer',
      name: 'Roger Rengifo',
      password: 'Test123!',
      phoneNumber: '(123) 213-1232',
      organization: {
        organization_name: 'Company name',
        phone: '(123) 213-2132',
        address: 'Address company',
        email: 'test@company.us'
      }
    }

    const registerResponse = {
      message: 'user is registered'
    }

    mock.onPost(AuthEndpoints.REGISTER, registerPayload).reply(200, registerResponse)
    const response = await register(registerPayload)
    expect(response.data).toEqual(registerResponse)
  })
})
