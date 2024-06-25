'use client'

import { Text } from '@mantine/core'
import styles from './SideNavigation.module.css'
import { CalendarIcon, ChevronDoubleRightIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline'
import { Squares2X2Icon, UsersIcon } from '@heroicons/react/24/solid'
import MenuItem from '@/components/atoms/MenuItem/MenuItem'
import { NAV_LINKS } from '@/enums/navLinks'
import { SideNavigationProps } from './SideNavigation.interfaces'
import { useState } from 'react'

function SideNavigation({ expanded = false, onToggle }: SideNavigationProps) {
  const [isNavExpanded, setIsNavExpanded] = useState<boolean>(expanded)

  const toggleSideNav = () => {
    setIsNavExpanded((prev) => !prev)
    onToggle?.()
  }

  return (
    <aside
      className={`${styles.AsideWrapper} ${isNavExpanded && styles.AsideWrapperExpanded}`}
      data-testid="sidebar-navigation"
    >
      <header className={styles.HeaderNav}>
        <Text size="sm">MENU</Text>
        <button
          className={styles.HeaderBtn}
          onClick={toggleSideNav}
          data-testid="toggle-nav"
          aria-expanded={isNavExpanded}
        >
          <ChevronDoubleRightIcon />
        </button>
      </header>
      <nav className={styles.Navigation}>
        <MenuItem Icon={<Squares2X2Icon />} title="Dashboard" href={NAV_LINKS.DASHBOARD} />
        <MenuItem Icon={<ClipboardDocumentListIcon />} title="Reports Audited" href={NAV_LINKS.REPORTS_AUDITED} />
        <MenuItem Icon={<UsersIcon />} title="Name 4" href="name4" />
        <MenuItem Icon={<CalendarIcon />} title="Name 2" href="name2" />
      </nav>
    </aside>
  )
}

export default SideNavigation
