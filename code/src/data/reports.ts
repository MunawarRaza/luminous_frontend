import { ReportContract } from '@/contracts/Report.contract'

export const reports: ReportContract[] = [
  {
    id: '1',
    reportName: 'Report 1',
    reportNumber: '1',
    status: 'Pending',
    requestedBy: 'John Doe',
    date: '08/30/2023 - 10:04 AM EDT',
    isValidating: true
  },
  {
    id: '2',
    reportName: 'Report 2',
    reportNumber: '2',
    status: 'Approved',
    requestedBy: 'John Doe',
    date: '08/30/2023 - 10:04 AM EDT'
  },
  {
    id: '3',
    reportName: 'Report 3',
    reportNumber: '3',
    status: 'Rejected',
    requestedBy: 'John Doe',
    date: '08/30/2023 - 10:04 AM EDT'
  }
]
