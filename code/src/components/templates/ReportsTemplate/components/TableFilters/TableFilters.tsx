import RegularInput from '@/components/atoms/RegularInput/RegularInput'
import { TableFiltersProps } from './TableFilters.interfaces'
import styles from './TableFilters.module.css'
import Select from '@/components/atoms/Select/Select'
import { ActionIcon } from '@mantine/core'
import { ArrowPathIcon, FunnelIcon } from '@heroicons/react/24/outline'

function TableFilters({ hasSearchBar = false, itemsPerPage = 10, setItemsPerPage }: TableFiltersProps) {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.SearchWrapper}>
        {hasSearchBar && <RegularInput label="Search Report" placeholder="Report Name, Code, Author’s Name" />}
      </div>
      <div className={styles.FiltersWrapper}>
        <Select
          label="Show"
          classNames={{ root: styles.FilterSelect }}
          options={['10', '25', '50']}
          value={String(itemsPerPage)}
          onOptionSubmit={(value) => setItemsPerPage?.(Number(value))}
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

export default TableFilters
