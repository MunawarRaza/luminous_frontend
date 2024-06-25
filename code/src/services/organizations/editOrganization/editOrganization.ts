import { requests } from '@/libs/axios/axios'
import { EditOrganizationData } from '../organizations.interfaces'
import { OrganizationsEndpoints } from '../organizations-endpoints'

async function editOrganization(body: EditOrganizationData, id: number) {
  return requests.put(`${OrganizationsEndpoints.ORGANIZATIONS}/${id}`, body)
}

export default editOrganization
