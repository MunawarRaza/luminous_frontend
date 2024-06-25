import { TableRow } from '@/components/atoms/Table/Table.interfaces'
import { UserAccountContract } from '@/contracts/UserAccount.contract'
import { EyeIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { ActionIcon, Text } from '@mantine/core'
import dayjs from 'dayjs'
import { useCallback, useEffect, useState } from 'react'

function useTableData(data: UserAccountContract[]) {
  const [rowsData, setRowsData] = useState<TableRow[]>([])
  const [selectedUser, setSelectedUser] = useState<UserAccountContract | undefined>(undefined)
  const [showModal, setShowModal] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const onEdit = (user: UserAccountContract) => {
    setSelectedUser(user)
    setIsEditing(true)
    setShowModal(true)
    setIsDeleting(false)
  }
  const onDelete = (user: UserAccountContract) => {
    setShowModal(true)
    setIsDeleting(true)
    setSelectedUser(user)
    setIsEditing(false)
  }
  const onView = (user: UserAccountContract) => {
    setSelectedUser(user)
    setShowModal(true)
    setIsEditing(false)
    setIsDeleting(false)
  }

  const handleCancel = () => {
    setIsDeleting(false)
    setShowModal(false)
    setSelectedUser(undefined)
    setIsEditing(false)
  }

  const setEditMode = () => setIsEditing(true)

  const formatRowData = useCallback(
    (account: UserAccountContract, index: number) => ({
      key: index.toString(),
      values: [
        <button key={account.name} onClick={() => onView?.(account)} style={{ border: 'none', cursor: 'pointer' }}>
          <Text c="secondary.6">{account.name}</Text>
        </button>,
        account.email,
        account.phone_number,
        account.id,
        dayjs(account.last_login).format('DD/MM/YYYY [-] HH:mm A [EDT]'),
        <div key="actions" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
          {Boolean(onEdit) && (
            <ActionIcon variant="transparent" onClick={() => onEdit?.(account)}>
              <PencilSquareIcon strokeWidth="2px" />
            </ActionIcon>
          )}
          {Boolean(onView) && (
            <ActionIcon variant="transparent" onClick={() => onView?.(account)}>
              <EyeIcon strokeWidth="2px" />
            </ActionIcon>
          )}
          {Boolean(onDelete) && (
            <ActionIcon variant="transparent" c="red" onClick={() => onDelete?.(account)}>
              <TrashIcon strokeWidth="2px" />
            </ActionIcon>
          )}
        </div>
      ]
    }),
    []
  )

  useEffect(() => {
    const formattedData = data.map(formatRowData)
    setRowsData(formattedData)
  }, [data, formatRowData])

  return { rowsData, selectedUser, showModal, isEditing, isDeleting, handleCancel, setEditMode }
}

export default useTableData
