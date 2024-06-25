import Button from '@/components/atoms/Button/Button'
import { Group } from '@mantine/core'
import { RejectUserProps } from './RejectUser.interface'
import { useAppDispatch, useAppSelector } from '@/store/hooks/store-hooks'
import { useCallback } from 'react'
import { deleteUserAccount } from '@/store/actions/users.actions'

function RejectUser({ onCancel, userId }: RejectUserProps) {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector((state) => state.usersLoaders.isDeletingUser)

  const handleReject = useCallback(async () => {
    try {
      console.log('SHOULD REJECT THE USER #0 but using as a ref #' + userId)
      await dispatch(deleteUserAccount(0)).unwrap()
      onCancel?.()
    } catch (error) {
      console.log(error)
    }
  }, [userId, dispatch, onCancel])

  return (
    <Group grow>
      <Button onClick={onCancel} label="Cancel" outlined />
      <Button onClick={handleReject} loading={isLoading} label="Yes" />
    </Group>
  )
}

export default RejectUser
