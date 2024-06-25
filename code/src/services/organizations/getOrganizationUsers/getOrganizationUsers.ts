import { requests } from '@/libs/axios/axios'
import { OrganizationsEndpoints } from '../organizations-endpoints'

async function getOrganizationUsers(id: number, itemsPerPage: number) {
  return requests.get(`${OrganizationsEndpoints.ORGANIZATIONS}/${id}/users`, {
    params: { page: 1, perPage: itemsPerPage }
  })
}

export default getOrganizationUsers
