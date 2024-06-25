import { UserAccountContract } from '@/contracts/UserAccount.contract'

export interface UserDetailsProps {
  user?: UserAccountContract
  onCancel?: () => void
  onEdit?: () => void
  onConfirm?: () => void
  editMode?: boolean
  createMode?: boolean
}
