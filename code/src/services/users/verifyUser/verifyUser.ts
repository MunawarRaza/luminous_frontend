import { requests } from '@/libs/axios/axios'
import { UsersEndpoints } from '../users-endpoints'
import { VerifyUserData } from '../users.interfaces'

async function verifyUser(body: VerifyUserData, id: number) {
  return requests.put(`${UsersEndpoints.USERS}/${id}`, body)
}

export default verifyUser
