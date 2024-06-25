export interface ILicense {
  id: number
  organization_name: string
  email: string
  max_users: number
  max_audits: number
  max_questions: number
  max_reports: number
  expiration_date: string
  activated_date?: string
  license_key: string
  status: string
}
