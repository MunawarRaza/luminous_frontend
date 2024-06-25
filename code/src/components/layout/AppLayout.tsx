'use client'

import { Outlet } from 'react-router-dom'
import Topbar from '../molecules/Topbar/Topbar'
import styles from './AppLayout.module.css'
import SideNavigation from '../molecules/SideNavigation/SideNavigation'
import Notification from '../atoms/Notification/Notification'
import { useAppDispatch, useAppSelector } from '@/store/hooks/store-hooks'
import { clearNotification } from '@/store/slices/notification/notification.slice'

function AppLayout() {
  const dispatch = useAppDispatch()
  const notification = useAppSelector((state) => state.notification)

  const closeNotification = () => dispatch(clearNotification())

  return (
    <main className={styles.MainApp}>
      <Topbar />
      <SideNavigation />
      <article className={styles.MainContent}>
        <div className={styles.MainWrapper}>
          <Outlet />
        </div>
      </article>
      <Notification
        isOpen={notification.show}
        variant={notification.variant}
        message={notification.message}
        onClose={closeNotification}
      />
    </main>
  )
}

export default AppLayout
