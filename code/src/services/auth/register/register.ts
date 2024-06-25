import { requests } from '@/libs/axios/axios'
import { RegisterData } from '../auth.interfaces'
import { AuthEndpoints } from '../auth-endpoints.enums'

const register = async (body: RegisterData) => {
  return requests.post(AuthEndpoints.REGISTER, body)
}

export default register
