import { requests } from '@/libs/axios/axios'
import { LoginData } from '../auth.interfaces'
import { AuthEndpoints } from '../auth-endpoints.enums'
import { AxiosResponse } from 'axios'
import { LoginResponse } from '@/contracts/auth/AuthResponses.contract'

const login = async (body: LoginData): Promise<AxiosResponse<LoginResponse>> => {
  return requests.post(AuthEndpoints.LOGIN, body)
}

export default login
