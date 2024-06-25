import { axiosInstance } from '@/libs/axios/axios'
import MockAdapter from 'axios-mock-adapter'
import { AuthEndpoints } from '../auth-endpoints.enums'
import login from './login'
import { LoginResponse } from '@/contracts/auth/AuthResponses.contract'
import { injectStore } from '@/libs/axios/axiosInterceptos'
import { store } from '@/store/store'
import { USER_ROLES } from '@/enums/userRoles'

injectStore(store)

describe('loginService', () => {
  let mock: MockAdapter

  beforeEach(() => {
    mock = new MockAdapter(axiosInstance)
  })

  it('should login the user', async () => {
    const loginPayload = {
      username: 'gasinc9@grr-la',
      password: 'Test123!'
    }

    const loginResponse: LoginResponse = {
      AuthenticationResult: {
        AccessToken: 'token',
        ExpiresIn: 3600,
        IdToken: 'token',
        RefreshToken: 'token',
        TokenType: 'token',
        role: {
          id: 1,
          name: USER_ROLES.SUPER_ADMIN
        }
      },
      ChallengeParameters: {},
      Organization: {
        id: 1,
        organization_name: 'GASInc Test',
        address: 'address',
        email: 'noreply@gasai.us',
        phone: 'phone',
        createdAt: 'date of creation',
        updatedAt: 'date of update'
      },
      ChallengeName: undefined,
      Session: ''
    }

    mock.onPost(AuthEndpoints.LOGIN, loginPayload).reply(200, loginResponse)
    const response = await login(loginPayload)
    expect(response.data).toEqual(loginResponse)
  })

  it('should throw an error if the user send incorrect username', async () => {
    const loginPayload = {
      username: 'thelea12@gmail.com',
      password: '12345678'
    }

    const loginResponse = {
      message: 'user not found'
    }

    mock.onPost(AuthEndpoints.LOGIN, loginPayload).reply(401, loginResponse)
    await expect(login(loginPayload)).rejects.toThrow('Request failed with status code 401')
  })
})
