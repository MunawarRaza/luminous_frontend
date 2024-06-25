import { requests } from '@/libs/axios/axios'
import { AuthEndpoints } from '../auth-endpoints.enums'
import { AxiosResponse } from 'axios'
import { LoginResponse } from '@/contracts/auth/AuthResponses.contract'

const refresh = async (
  refreshToken: string | null,
  username: string | undefined
): Promise<AxiosResponse<LoginResponse>> => {
  return requests.post(AuthEndpoints.REFRESH, { username, token: refreshToken })
}

export default refresh
