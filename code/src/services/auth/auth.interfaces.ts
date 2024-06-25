import { LoginSchema } from '@/components/organisms/LoginForm/LoginForm.interfaces'
import { UserContract } from '@/contracts/User.contract'
import { z } from 'zod'

export type LoginData = z.infer<typeof LoginSchema>
export interface RegisterData {
  name: string
  email: string
  password: string
  phoneNumber: string
  jobTitle: string
  organization: {
    organization_name: string
    phone: string
    address: string
    email: string
  }
}

export interface RegisterResponse {
  token: string
  user: UserContract
}

export interface MfaVerifyData {
  username: string
  code: string
  session: string
}
