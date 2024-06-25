import { requests } from '@/libs/axios/axios'
import { AuthEndpoints } from '../auth-endpoints.enums'
import { AxiosResponse } from 'axios'
import {
  ResetPasswordRequestInterface,
  ResetPasswordResponseInterface
} from '@/services/auth/resetPassword/resetPassword.interface.ts'

const resetPassword = async (
  body: ResetPasswordRequestInterface
): Promise<AxiosResponse<ResetPasswordResponseInterface>> => {
  return requests.post(AuthEndpoints.RESET_PASSWORD, body)
}

export default resetPassword
