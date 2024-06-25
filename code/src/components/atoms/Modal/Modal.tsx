import { ModalProps } from './Modal.interfaces'
import { Modal as MantineModal } from '@mantine/core'
import styles from './Modal.module.css'
import { useEffect, useState } from 'react'

function Modal({
  onClose,
  centered = true,
  title,
  isOpen = false,
  children,
  canClose = true,
  className,
  ...props
}: ModalProps) {
  const [opened, setOpened] = useState(isOpen)

  const handleClose = () => {
    setOpened(false)
    onClose?.()
  }

  useEffect(() => {
    setOpened(isOpen)
  }, [isOpen])

  return (
    <MantineModal
      data-testid="modal"
      overlayProps={{
        'aria-label': 'Modal overlay'
      }}
      className={className}
      withCloseButton={canClose}
      opened={opened}
      onClose={handleClose}
      centered={centered}
      title={title}
      closeButtonProps={{
        'aria-label': 'Close modal'
      }}
      classNames={{
        overlay: styles.Overlay,
        content: styles.Modal,
        header: styles.Header,
        body: styles.Body,
        title: styles.Title,
        close: styles.Close
      }}
      {...props}
    >
      {children}
    </MantineModal>
  )
}

export default Modal
