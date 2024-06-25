import { Organization } from '@/contracts/Organization.contract'

export interface OrganizationDetailsProps {
  organization?: Organization
  onCancel?: () => void
  onEdit?: () => void
  onConfirm?: () => void
  editMode?: boolean
}
