interface IAlertMessageProps {
  hideCloseButton?: boolean
  variant?: 'success' | 'warning' | 'error'
  children: React.ReactNode
  title?: string
  icon?: React.ReactNode | null
  onClose?: () => void
  className?: string
  show: boolean
}

export type AlertMessageProps = IAlertMessageProps
