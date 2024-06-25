import Table from '@/components/atoms/Table/Table'
// import { ReportsTemplateProps } from './ReportsTemplate.interfaces'
// import styles from './ReportsTemplate.module.css'
import TableFilters from './components/TableFilters/TableFilters'
import { useState } from 'react'
import { useTableData } from './hooks/useTableData.hook'
import { reports } from '@/data/reports'

const columns = [
  { key: 'reportName', title: 'Report Name' },
  { key: 'reportNumber', title: 'Report#' },
  { key: 'status', title: 'Status' },
  { key: 'requestedBy', title: 'Requested By' },
  { key: 'date', title: 'Request Date' },
  { key: 'actions', title: 'Actions' }
]

function ReportsTemplate() {
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const rowsData = useTableData(reports)

  return (
    <>
      <TableFilters hasSearchBar itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} />
      <Table columns={columns} rows={rowsData} itemsPerPage={itemsPerPage} hasPagination />
    </>
  )
}

export default ReportsTemplate
