import { requests } from '@/libs/axios/axios'
import { OrganizationsEndpoints } from '../organizations-endpoints'

async function getCurrentUserOrganization() {
  return requests.get(`${OrganizationsEndpoints.AUTH}/user`)
}

export default getCurrentUserOrganization
