import { requests } from '@/libs/axios/axios'
import { MfaVerifyData } from '../auth.interfaces'
import { AuthEndpoints } from '../auth-endpoints.enums'
import { AxiosResponse } from 'axios'
import { LoginResponse } from '@/contracts/auth/AuthResponses.contract'

const mfa = async (body: MfaVerifyData): Promise<AxiosResponse<LoginResponse>> => {
  return requests.post(AuthEndpoints.MFA_VERIFICATION, body)
}

export default mfa
