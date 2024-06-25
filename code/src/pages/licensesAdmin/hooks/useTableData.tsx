import { ILicense } from '@/contracts/License.contract'
import { EyeIcon, PencilSquareIcon, PowerIcon } from '@heroicons/react/24/outline'
import { ActionIcon, Text } from '@mantine/core'
import dayjs from 'dayjs'
import { useMemo, useState } from 'react'

function useTableData(data: ILicense[], handleTableActions: (type: string) => void) {
  const [selectedLicense, setSelectedLicense] = useState<ILicense | undefined>(undefined)

  const rowsData = useMemo(() => {
    const onSelectAction = (license: ILicense, action: 'license' | 'delete') => {
      if (action === 'delete') {
        handleTableActions(action)
        setSelectedLicense(license)
      } else {
        setSelectedLicense(license)
        handleTableActions(action)
      }
    }

    return data.map((license, index) => ({
      key: index.toString(),
      values: [
        <Text key={license.organization_name} c="secondary.6">
          {license.organization_name}
        </Text>,
        license.max_users,
        license.max_audits,
        license.max_questions,
        license.activated_date
          ? dayjs(license.activated_date).format('DD/MM/YYYY [-] HH:mm A [EDT]')
          : 'Not yet activated',
        dayjs(license.expiration_date).format('DD/MM/YYYY [-] HH:mm A [EDT]'),
        license.status,
        <div key="actions" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
          <ActionIcon variant="transparent" onClick={() => onSelectAction(license, 'license')}>
            <PencilSquareIcon strokeWidth="2px" />
          </ActionIcon>
          <ActionIcon variant="transparent" onClick={() => onSelectAction(license, 'delete')}>
            <EyeIcon strokeWidth="2px" />
          </ActionIcon>
          <ActionIcon variant="transparent" c="red" onClick={() => onSelectAction(license, 'license')}>
            <PowerIcon strokeWidth="2px" />
          </ActionIcon>
        </div>
      ]
    }))
  }, [data, handleTableActions])

  return { rowsData, selectedLicense, setSelectedLicense }
}

export default useTableData
