export interface NotificationState {
  variant: 'success' | 'error' | 'warning'
  message: string
  show: boolean
}
