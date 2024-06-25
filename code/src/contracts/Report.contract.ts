export interface ReportContract {
  id: string
  reportName: string
  reportNumber: string
  status: string
  requestedBy: string
  date: string
  isValidating?: boolean
}
