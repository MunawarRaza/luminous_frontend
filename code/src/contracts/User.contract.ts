import { USER_ROLES } from '@/enums/userRoles'
import { Organization } from './Organization.contract'

export interface UserContract {
  id: number
  name: string
  email: string
  created_at: string
  role: {
    id: number
    name: USER_ROLES
  }
  organization: Organization
}
