import { Alert } from '@mantine/core'
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'
import { AnimatePresence, motion } from 'framer-motion'

import styles from './AlertMessage.module.css'
import { AlertMessageProps } from './AlertMessage.interfaces'
import { useEffect, useState } from 'react'

const errorIcon = <ExclamationTriangleIcon />

function AlertMessage({
  variant,
  show = false,
  hideCloseButton = false,
  icon = null,
  title,
  onClose,
  className,
  children
}: AlertMessageProps) {
  const [isVisible, setIsVisible] = useState(show)

  useEffect(() => {
    setIsVisible(show)
    let timeout: ReturnType<typeof setTimeout>

    if (show) {
      timeout = setTimeout(() => {
        setIsVisible(false)
        onClose?.()
      }, 6000)
    }

    return () => clearTimeout(timeout)
  }, [show, onClose])

  const handleClose = () => {
    setIsVisible(false)
    onClose?.()
  }

  const rootClasses = [styles.root, styles[`root-${variant}`], className].join(' ')
  const titleClasses = [styles.title, styles[`title-${variant}`]].join(' ')
  const iconClasses = [styles.icon, styles[`icon-${variant}`]].join(' ')

  const Icon = variant === 'error' ? errorIcon : icon

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Alert
            withCloseButton={!hideCloseButton}
            closeButtonLabel="Dismiss"
            title={
              <div className={styles.titleWrapper}>
                {Icon && <span className={iconClasses}>{Icon}</span>}
                {title && <span className={titleClasses}>{title}</span>}
              </div>
            }
            onClose={handleClose}
            classNames={{
              icon: iconClasses,
              root: rootClasses,
              message: styles.message,
              title: titleClasses,
              closeButton: styles.closeButton
            }}
            data-testid="alert-message"
          >
            {children}
          </Alert>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AlertMessage
