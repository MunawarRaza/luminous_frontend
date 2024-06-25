import { requests } from '@/libs/axios/axios'
import { UsersEndpoints } from '../users-endpoints'

export async function deleteUser(userId: number) {
  return requests.delete(`${UsersEndpoints.USERS}/${userId}`)
}
