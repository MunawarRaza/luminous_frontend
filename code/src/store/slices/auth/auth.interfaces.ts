import { UserContract } from '@/contracts/User.contract'

export interface IAuthState {
  isSignedIn: boolean
  token: string | null
  user: null | UserContract
  authError?: string
  authMessage?: string
}
