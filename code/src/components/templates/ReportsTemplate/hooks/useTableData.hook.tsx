import Badge from '@/components/atoms/Badge/Badge'
import Spinner from '@/components/atoms/Spinner/Spinner'
import { TableRow } from '@/components/atoms/Table/Table.interfaces'
import { ReportContract } from '@/contracts/Report.contract'
import { DocumentArrowDownIcon, EyeIcon } from '@heroicons/react/24/outline'
import { ActionIcon } from '@mantine/core'
import { useMemo } from 'react'

const badgeColors = {
  Pending: 'orange',
  Approved: 'green',
  Rejected: 'red'
}

export function useTableData(reports: ReportContract[]) {
  const tableData = useMemo(() => {
    return reports.map((report, index) => ({
      key: index.toString(),
      values: [
        report.reportName,
        report.isValidating ? <Spinner width={35} /> : report.reportNumber,
        // @ts-expect-error getting the right color
        <Badge key={index} color={badgeColors[report.status]}>
          {report.status}
        </Badge>,
        report.requestedBy,
        report.date,
        <div
          key={index}
          style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center', width: '100%' }}
        >
          {!report.isValidating && (
            <>
              <ActionIcon variant="transparent" onClick={() => console.log('clicked')} color="text">
                <DocumentArrowDownIcon />
              </ActionIcon>
              <ActionIcon variant="transparent" onClick={() => console.log('clicked')} color="text">
                <EyeIcon />
              </ActionIcon>
            </>
          )}
        </div>
      ]
    }))
  }, [reports])

  return tableData as TableRow[]
}
