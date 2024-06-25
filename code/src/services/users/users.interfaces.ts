export interface EditUserData {
  name: string
  email: string
  phone_number: string
  role: string
  job_title: string
}
export interface CreateUserData {
  name: string
  email: string
  phone_number: string
  role: string
  job_title: string
  password: string
}
export interface VerifyUserData {
  admin_verified: boolean
}
