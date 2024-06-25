'use client'

import { TableProps } from './Table.interfaces'
import { Table as MantineTable, Pagination } from '@mantine/core'
import styles from './Table.module.css'
import { useState } from 'react'

function Table({ columns, rows, hasPagination, itemsPerPage = 10, ...props }: TableProps) {
  const [currentPage, setCurrentPage] = useState(1)

  const currentData = hasPagination ? rows.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : rows
  const totalPages = Math.ceil(rows.length / itemsPerPage)

  return (
    <div className={styles.TableWrapper}>
      <MantineTable.ScrollContainer minWidth={400} w="100%">
        <MantineTable
          data-testid="table"
          horizontalSpacing="sm"
          verticalSpacing="sm"
          className={styles.Table}
          classNames={{ thead: styles.TableHead, th: styles.TableTh, tr: styles.TableTr, td: styles.TableTd }}
          {...props}
        >
          <MantineTable.Thead data-testid="table-head">
            <MantineTable.Tr>
              {columns.map((column) => (
                <MantineTable.Th key={column.key}>{column.title}</MantineTable.Th>
              ))}
            </MantineTable.Tr>
          </MantineTable.Thead>
          <MantineTable.Tbody data-testid="table-body">
            {currentData.map((row) => (
              <MantineTable.Tr key={row.key}>
                {row.values.map((value, index) => (
                  <MantineTable.Td key={index}>{value}</MantineTable.Td>
                ))}
              </MantineTable.Tr>
            ))}
          </MantineTable.Tbody>
        </MantineTable>
      </MantineTable.ScrollContainer>
      {hasPagination && (
        <Pagination
          data-testid="table-pagination"
          role="pagination"
          color="secondary.8"
          classNames={{ control: styles.Control }}
          total={totalPages}
          value={currentPage}
          onChange={setCurrentPage}
        />
      )}
    </div>
  )
}

export default Table
