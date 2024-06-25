import { USER_ROLES } from '@/enums/userRoles'

export interface UserAccountContract {
  id: number
  name: string
  phone_number: string
  job_title: string
  email: string
  role: USER_ROLES
  last_login: string
  login_amount: number
  manager?: unknown
  password?: string
  admin_verified: boolean
}
