import { UserAccountContract } from '@/contracts/UserAccount.contract'

export interface UsersState {
  users: UserAccountContract[]
  user: UserAccountContract | null
  usersError: string | null
}
