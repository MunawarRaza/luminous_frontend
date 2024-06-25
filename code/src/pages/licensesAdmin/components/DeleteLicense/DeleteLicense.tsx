import Button from '@/components/atoms/Button/Button'
import { Group } from '@mantine/core'
import { DeleteLicenseProps } from './DeleteLicense.interface'
import { useCallback } from 'react'

function DeleteLicense({ onCancel, licenseId }: DeleteLicenseProps) {
  const handleDelete = useCallback(async () => {
    try {
      console.log('Deleting License #' + licenseId)
      onCancel?.()
    } catch (error) {
      console.log(error)
    }
  }, [licenseId, onCancel])

  return (
    <Group grow>
      <Button onClick={onCancel} label="Cancel" outlined />
      <Button onClick={handleDelete} label="Yes" />
    </Group>
  )
}

export default DeleteLicense
