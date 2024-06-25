interface INotificationProps {
  isOpen: boolean
  variant?: 'success' | 'error' | 'warning'
  message: string
  onClose?: () => void
  className?: string
  title?: string
  Icon?: React.ReactNode
}

export type NotificationProps = INotificationProps
