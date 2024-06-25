import { Organization } from '@/contracts/Organization.contract'

export interface OrganizationsState {
  organizations: Organization[]
  organization: Organization | undefined
  organizationsError: string | null
}
