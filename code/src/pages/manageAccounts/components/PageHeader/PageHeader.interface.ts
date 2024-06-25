import { Organization } from '@/contracts/Organization.contract'

export interface PageHeaderProps {
  organization: Organization | undefined
  isCreating: boolean
  setIsCreating: (isCreating: boolean) => void
  isOrganization: boolean
  setIsOrganization: (isOrganization: boolean) => void
}
