import { TableRow } from '@/components/atoms/Table/Table.interfaces'
import { UserAccountContract } from '@/contracts/UserAccount.contract'
import { CheckBadgeIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { ActionIcon, Text } from '@mantine/core'
import dayjs from 'dayjs'
import { useCallback, useEffect, useState } from 'react'
import { useAppDispatch } from '@/store/hooks/store-hooks'
import { verifyUserAccount } from '@/store/actions/users.actions'

function useApprovalTableData(data: UserAccountContract[]) {
  const dispatch = useAppDispatch()
  const [rowsApprovalData, setRowsApprovalData] = useState<TableRow[]>([])
  const [selectedApprovalUser, setSelectedApprovalUser] = useState<UserAccountContract | undefined>(undefined)
  const [showApprovalModal, setShowApprovalModal] = useState(false)
  const [isRejectingApprovalUser, setisRejectingApprovalUser] = useState(false)

  const onDelete = (user: UserAccountContract) => {
    setShowApprovalModal(true)
    setSelectedApprovalUser(user)
    setisRejectingApprovalUser(true)
  }

  const onView = (user: UserAccountContract) => {
    setSelectedApprovalUser(user)
    setShowApprovalModal(true)
  }

  const onAccept = useCallback(
    async (user: UserAccountContract) => {
      const uservalues = {
        admin_verified: true
      }

      await dispatch(verifyUserAccount({ id: user?.id, body: uservalues })).unwrap()
    },
    [dispatch]
  )

  const handleApprovalCancel = () => {
    setShowApprovalModal(false)
    setSelectedApprovalUser(undefined)
    setisRejectingApprovalUser(false)
  }

  const formatRowData = useCallback(
    (account: UserAccountContract, index: number) => ({
      key: index.toString(),
      values: [
        <button key={account.name} onClick={() => onView?.(account)} style={{ border: 'none', cursor: 'pointer' }}>
          <Text c="secondary.6">{account.name}</Text>
        </button>,
        account.email,
        account.phone_number,
        dayjs(account.last_login).format('DD/MM/YYYY [-] HH:mm A [EDT]'),
        <div key="actions" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
          {Boolean(onView) && (
            <ActionIcon variant="filled" color="green" radius="xl" onClick={async () => onAccept?.(account)}>
              <CheckBadgeIcon strokeWidth="2px" />
            </ActionIcon>
          )}
          {Boolean(onDelete) && (
            <ActionIcon variant="filled" color="red" radius="xl" onClick={() => onDelete?.(account)}>
              <XCircleIcon strokeWidth="2px" />
            </ActionIcon>
          )}
        </div>
      ]
    }),
    [onAccept]
  )

  useEffect(() => {
    const filteredData = data.filter((data) => {
      return !data.admin_verified
    })
    const formattedData = filteredData.map(formatRowData)
    setRowsApprovalData(formattedData)
  }, [data, formatRowData])

  return { rowsApprovalData, selectedApprovalUser, isRejectingApprovalUser, showApprovalModal, handleApprovalCancel }
}

export default useApprovalTableData
