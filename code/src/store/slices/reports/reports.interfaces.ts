export interface IReportState {
  report: Record<string, unknown> | null
  isUploading: boolean
  isValidating: boolean
}
