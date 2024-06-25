export interface TableRow {
  key: string
  values: Array<string | number | React.ReactNode | boolean>
}

export interface TableColumn {
  title: string
  key: string
}

interface ITableProps {
  columns: TableColumn[]
  rows: TableRow[]
  hasPagination?: boolean
  itemsPerPage?: number
}

export type TableProps = ITableProps
