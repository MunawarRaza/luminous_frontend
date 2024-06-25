import { requests } from '@/libs/axios/axios'
import { AuthEndpoints } from '../auth-endpoints.enums'

const logout = async (token: string | null) => {
  return requests.post(AuthEndpoints.LOGOUT, { accessToken: token })
}

export default logout
