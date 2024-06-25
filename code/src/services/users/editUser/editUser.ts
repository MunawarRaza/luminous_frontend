import { requests } from '@/libs/axios/axios'
import { EditUserData } from '../users.interfaces'
import { UsersEndpoints } from '../users-endpoints'

async function editUser(body: EditUserData, id: number) {
  return requests.put(`${UsersEndpoints.USERS}/${id}`, body)
}

export default editUser
