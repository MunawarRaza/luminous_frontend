import { Button, Menu } from '@mantine/core'
import { UserMenuProps } from './UserMenu.interfaces'
import styles from './UserMenu.module.css'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom'
import { NAV_LINKS } from '@/enums/navLinks'

function UserMenu({ user, logout }: UserMenuProps) {
  const navigate = useNavigate()

  return (
    <Menu shadow="md" width={200} data-testid="user-menu">
      <Menu.Target data-testid="menu-trigger">
        <Button
          size="sm"
          aria-label="User menu"
          className={styles.MenuButton}
          leftSection={<img src={user.avatar} alt={user.name} />}
          rightSection={<ChevronDownIcon className={styles.Icon} />}
        >
          {user.name}
        </Button>
      </Menu.Target>

      <Menu.Dropdown className={styles.Dropdown} data-testid="menu-dropdown">
        <Menu.Item
          onClick={() => navigate(NAV_LINKS.MANAGE_ACCOUNTS)}
          className={styles.DropdownItem}
          data-testid="manage-account-menu"
        >
          Manage Accounts
        </Menu.Item>
        <Menu.Item className={styles.DropdownItem}>Your Profile</Menu.Item>
        <Menu.Item
          onClick={() => navigate(NAV_LINKS.LICENSE_PLAN)}
          className={styles.DropdownItem}
          data-testid="license-menu"
        >
          Aquire License
        </Menu.Item>
        <Menu.Item
          onClick={() => navigate(NAV_LINKS.LICENSE_MANAGEMENT)}
          className={styles.DropdownItem}
          data-testid="license-management-menu"
        >
          License Management
        </Menu.Item>
        <Menu.Item
          onClick={() => navigate(NAV_LINKS.LICENSES_ADMINISTRATION)}
          className={styles.DropdownItem}
          data-testid="license-admin-menu"
        >
          Licenses Management
        </Menu.Item>
        <Menu.Item className={styles.DropdownItem}>Settings</Menu.Item>
        <Menu.Item aria-label="logout" onClick={logout} className={styles.DropdownItem} data-testid="logout-button">
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export default UserMenu
