import Table from '@/components/atoms/Table/Table'
import TableFilters from './components/TableFilters/TableFilters'
import PageHeader from './components/PageHeader/PageHeader'
import useTableData from './hooks/useTableData'
import useApprovalTableData from './hooks/useApprovalTableData'
import { useEffect, useState } from 'react'
import Modal from '@/components/atoms/Modal/Modal'
import UserDetails from './components/UserDetails/UserDetails'
import DeleteUser from './components/DeleteUser/DeleteUser'
import RejectUser from './components/RejectUser/RejectUser'
import { useAppDispatch, useAppSelector } from '@/store/hooks/store-hooks'
import { getUsersAccounts, getOrganizationUsersAccounts } from '@/store/actions/users.actions'
import { USER_ROLES } from '@/enums/userRoles'
import OrganizationDetails from './components/OrganizationDetails/OrganizationDetails'

const columns = [
  { key: 'name', title: 'Name' },
  { key: 'email', title: 'Email' },
  { key: 'phone', title: 'Phone#' },
  { key: 'loginDays', title: '30 DL' },
  { key: 'lastLogin', title: 'Last login' },
  { key: 'actions', title: 'Actions' }
]

const approvalColumns = [
  { key: 'name', title: 'Name' },
  { key: 'email', title: 'Email' },
  { key: 'phone', title: 'Phone#' },
  { key: 'createdAt', title: 'Solicited Date' },
  { key: 'actions', title: 'Actions' }
]

function ManageAccountsPage() {
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [approvalItemsPerPage, setapprovalItemsPerPage] = useState(10)
  const [isCreating, setIsCreating] = useState(false)
  const [isOrganization, setIsOrganization] = useState(false)
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.auth.user)
  const usersAccounts = useAppSelector((state) => state.users.users)
  const organization = useAppSelector((state) => state.organizations.organization)
  const { rowsData, showModal, selectedUser, isEditing, isDeleting, handleCancel, setEditMode } =
    useTableData(usersAccounts)
  const isSuperAdmin = user?.role.name === USER_ROLES.SUPER_ADMIN
  const { rowsApprovalData, showApprovalModal, isRejectingApprovalUser, selectedApprovalUser, handleApprovalCancel } =
    useApprovalTableData(usersAccounts)

  useEffect(() => {
    if (user?.role.name === USER_ROLES.SUPER_ADMIN) {
      dispatch(getUsersAccounts())
    } else {
      dispatch(getOrganizationUsersAccounts({ organizationId: user?.organization.id, itemsPerPage }))
    }
  }, [dispatch, itemsPerPage, user?.organization.id, user?.role.name])

  const handleClose = () => {
    handleCancel()
    handleApprovalCancel()
    setIsCreating(false)
    setIsOrganization(false)
  }

  const modalTitle: string = isCreating
    ? 'Register Company User'
    : isDeleting
    ? 'Delete user?'
    : isRejectingApprovalUser
    ? 'Reject User?'
    : `${isEditing ? 'Edit' : ''} ${isOrganization ? 'Organization' : 'User'} Information`

  return (
    <>
      <PageHeader
        organization={organization}
        isCreating={isCreating}
        setIsCreating={setIsCreating}
        isOrganization={isOrganization}
        setIsOrganization={setIsOrganization}
      />
      {isSuperAdmin && (
        <div>
          <TableFilters
            hasSearchBar={false}
            itemsPerPage={approvalItemsPerPage}
            setItemsPerPage={setapprovalItemsPerPage}
          />
          <Table rows={rowsApprovalData} columns={approvalColumns} hasPagination itemsPerPage={approvalItemsPerPage} />
        </div>
      )}
      <TableFilters hasSearchBar={true} itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} />
      <Table rows={rowsData} columns={columns} hasPagination itemsPerPage={itemsPerPage} />
      <Modal
        isOpen={showModal || isCreating || isOrganization || showApprovalModal}
        title={modalTitle}
        onClose={handleClose}
        canClose={!isDeleting}
      >
        {!isDeleting && !isCreating && !showApprovalModal && !isOrganization && (
          <UserDetails user={selectedUser} onEdit={setEditMode} onCancel={handleClose} editMode={isEditing} />
        )}
        {isCreating && !isOrganization && (
          <UserDetails
            user={selectedUser}
            onEdit={setEditMode}
            onCancel={handleClose}
            editMode={true}
            createMode={isCreating}
          />
        )}
        {isDeleting && <DeleteUser userId={selectedUser?.id ?? 0} onCancel={handleClose} />}
        {isSuperAdmin && isRejectingApprovalUser && (
          <RejectUser userId={selectedApprovalUser?.id ?? 0} onCancel={handleClose} />
        )}
        {isOrganization && <OrganizationDetails onEdit={setEditMode} onCancel={handleClose} editMode={isEditing} />}
      </Modal>
    </>
  )
}

export default ManageAccountsPage
