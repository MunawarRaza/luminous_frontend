import styles from './TableFilters.module.css'
import { ArrowPathIcon, FunnelIcon } from '@heroicons/react/24/outline'
import Select from '@/components/atoms/Select/Select'
import { TableFiltersProps } from './TableFilters.interface'
import { ActionIcon } from '@mantine/core'

function ManageTableActions({ itemsPerPage, setItemsPerPage }: TableFiltersProps) {
  return (
    <div className={styles.ManageTableActions}>
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
