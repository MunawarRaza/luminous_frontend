import { ILicense } from '@/contracts/License.contract'

export interface LicenseDetailsProps {
  license?: ILicense
  onCancel?: () => void
  onEdit?: () => void
  onConfirm?: () => void
  editMode?: boolean
  generateMode?: boolean
}
