import Button from '@/components/atoms/Button/Button'
import { Group } from '@mantine/core'
import { DeleteUserProps } from './DeleteUser.interface'
import { useAppDispatch, useAppSelector } from '@/store/hooks/store-hooks'
import { useCallback } from 'react'
import { deleteUserAccount } from '@/store/actions/users.actions'

function DeleteUser({ onCancel, userId }: DeleteUserProps) {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector((state) => state.usersLoaders.isDeletingUser)

  const handleDelete = useCallback(async () => {
    try {
      await dispatch(deleteUserAccount(userId)).unwrap()
      onCancel?.()
    } catch (error) {
      console.log(error)
    }
  }, [userId, dispatch, onCancel])

  return (
    <Group grow>
      <Button onClick={onCancel} label="Cancel" outlined />
      <Button onClick={handleDelete} loading={isLoading} label="Yes" />
    </Group>
  )
}

export default DeleteUser
