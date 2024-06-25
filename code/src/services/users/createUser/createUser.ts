import { requests } from '@/libs/axios/axios'
import { CreateUserData } from '../users.interfaces'
import { UsersEndpoints } from '../users-endpoints'

async function createUser(body: CreateUserData, organizationId: string | undefined) {
  return requests.post(`${UsersEndpoints.ORGANIZATIONS}/${organizationId}/users`, body)
}

export default createUser
