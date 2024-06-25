import { requests } from '@/libs/axios/axios'
import { UsersEndpoints } from '../users-endpoints'

async function getUsers() {
  return requests.get(UsersEndpoints.USERS)
}

export default getUsers
