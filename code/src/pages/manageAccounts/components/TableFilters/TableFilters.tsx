import RegularInput from '@/components/atoms/RegularInput/RegularInput'
import styles from './TableFilters.module.css'
import { ArrowPathIcon, FunnelIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Select from '@/components/atoms/Select/Select'
import { TableFiltersProps } from './TableFilters.interface'
import { ActionIcon } from '@mantine/core'

function ManageTableActions({ hasSearchBar, itemsPerPage, setItemsPerPage }: TableFiltersProps) {
  return (
    <div className={styles.ManageTableActions}>
      <div className={styles.SearchWrapper}>
        {hasSearchBar && (
          <RegularInput
            label="Search Employee"
            placeholder="Employee Name, ID, Role"
            rightSection={<MagnifyingGlassIcon className={styles.SearchIcon} />}
          />
        )}
      </div>
      <div className={styles.FiltersWrapper}>
        <Select
          label="Show"
          classNames={{ root: styles.FilterSelect }}
          options={['10', '25', '50']}
          value={String(itemsPerPage)}
          onOptionSubmit={(value) => setItemsPerPage(Number(value))}
        />
        <ActionIcon variant="outline" size="lg" className={styles.FilterButton}>
          <ArrowPathIcon />
        </ActionIcon>
        <ActionIcon variant="outline" size="lg" className={styles.FilterButton}>
          <FunnelIcon />
        </ActionIcon>
      </div>
    </div>
  )
}

export default ManageTableActions
