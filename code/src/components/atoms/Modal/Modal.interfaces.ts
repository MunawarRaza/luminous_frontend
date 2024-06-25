interface IModalProps {
  children: React.ReactNode
  isOpen: boolean
  onClose?: () => void
  title: string
  centered?: boolean
  canClose?: boolean
  className?: string
}

export type ModalProps = IModalProps
