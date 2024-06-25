import { requests } from '@/libs/axios/axios'
import { OrganizationsEndpoints } from '../organizations-endpoints'

async function getOrganizationById(id: number) {
  return requests.get(`${OrganizationsEndpoints.ORGANIZATION}/${id}`)
}

export default getOrganizationById
