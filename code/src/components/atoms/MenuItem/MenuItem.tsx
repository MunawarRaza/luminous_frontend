import { NavLink } from 'react-router-dom'
import styles from './MenuItem.module.css'
import { MenuItemProps } from './MenuItem.interfaces'
import { Text } from '@mantine/core'

function MenuItem({ Icon, title, href }: MenuItemProps) {
  return (
    <NavLink
      data-testid="menu-item"
      to={href}
      className={({ isActive }) => `${styles.MenuItem} ${isActive && styles.ActiveItem}`}
    >
      <span className={styles.Icon}>{Icon}</span>
      <Text fw="bold">{title}</Text>
    </NavLink>
  )
}

export default MenuItem
