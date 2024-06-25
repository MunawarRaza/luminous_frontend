import { USER_ROLES } from '@/enums/userRoles'

export interface LoginResponse {
  ChallengeParameters: unknown
  ChallengeName: unknown
  Session: string
  AuthenticationResult: {
    AccessToken: string
    ExpiresIn: number
    TokenType: string
    RefreshToken: string
    IdToken: string
    role: {
      id: number
      name: USER_ROLES
    }
  }
  Organization: {
    id: number
    organization_name: string
    address: string
    email: string
    phone: string
    createdAt: string
    updatedAt: string
  }
}
