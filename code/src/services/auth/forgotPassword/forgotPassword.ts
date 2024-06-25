import { requests } from '@/libs/axios/axios'
import { AuthEndpoints } from '../auth-endpoints.enums'
import { AxiosResponse } from 'axios'
import {
  ForgotPasswordRequestInterface,
  ForgotPasswordResponseInterface
} from '@/services/auth/forgotPassword/forgotPassword.interface.ts'

const forgotPassword = async (
  body: ForgotPasswordRequestInterface
): Promise<AxiosResponse<ForgotPasswordResponseInterface>> => {
  return requests.post(AuthEndpoints.FORGOT_PASSWORD, body)
}

export default forgotPassword
