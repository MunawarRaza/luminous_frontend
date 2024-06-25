import { NotificationProps } from './Notification.interfaces'
import { Notification as MantineNotification } from '@mantine/core'
import styles from './Notification.module.css'
import { AnimatePresence, Variants, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const animateVariants: Variants = {
  hidden: { y: '-50vh', opacity: 0 },
  visible: { y: '0', opacity: 1, transition: { type: 'spring', stiffness: 40, duration: 0.35 } }
}

function Notification({ message, Icon, variant = 'success', onClose, isOpen }: NotificationProps) {
  const [isNotificationOpen, setIsNotificationOpen] = useState(isOpen)

  useEffect(() => {
    setIsNotificationOpen(isOpen)
  }, [isOpen])

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isNotificationOpen) {
      timeout = setTimeout(() => {
        setIsNotificationOpen(false)
        onClose?.()
      }, 5000)
    }

    return () => {
      timeout && clearTimeout(timeout)
    }
  }, [isNotificationOpen, onClose])

  const handleOnClose = () => {
    setIsNotificationOpen(false)
    onClose?.()
  }

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate={isNotificationOpen ? 'visible' : 'hidden'}
        variants={animateVariants}
        className={styles.wrapper}
      >
        <MantineNotification
          data-testid="notification"
          title={variant}
          icon={Icon}
          onClose={handleOnClose}
          className={`${styles.notification} ${styles[`notification-${variant}`]}`}
          classNames={{
            description: styles.description,
            closeButton: styles.closeButton,
            title: [styles.title, styles[`title-${variant}`]].join(' '),
            icon: styles.icon
          }}
          withCloseButton
          closeButtonProps={{
            'data-testid': 'notification-close-button'
          }}
        >
          {message}
        </MantineNotification>
      </motion.div>
    </AnimatePresence>
  )
}

export default Notification
