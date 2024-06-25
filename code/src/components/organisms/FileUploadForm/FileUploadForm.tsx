import { useMemo } from 'react'
import FileInput from '@/components/atoms/FileInput/FileInput'
import FilePreview from '@/components/atoms/FilePreview/FilePreview'
import { SimpleGrid, Space } from '@mantine/core'
import Button from '@/components/atoms/Button/Button'
import { useForm } from '@mantine/form'
import styles from './FileUploadForm.module.css'
import { FileUploadFormProps } from './FileUploadForm.interfaces'
import { useAppSelector } from '@/store/hooks/store-hooks'

function FileUploadForm({ onSubmit }: FileUploadFormProps) {
  const isUploading = useAppSelector((state) => state.reports.isUploading)
  const form = useForm<{ file: File | null }>({
    initialValues: {
      file: null
    }
  })

  const handleSubmit = form.onSubmit((values) => {
    if (values.file) onSubmit?.(values.file)
  })

  const fileUrl = useMemo(() => {
    const file = form.values.file

    if (file) {
      return URL.createObjectURL(file)
    }
  }, [form.values.file])

  const onSelectFile = (files: File[] | File | null) => {
    if (files instanceof File) {
      form.setFieldValue('file', files)
    }
  }

  const onChangeFile = () => form.setFieldValue('file', null)

  return (
    <form data-testid="upload-file-form" onSubmit={handleSubmit} className={styles.Form}>
      {!form.values.file ? (
        <>
          <FileInput label="Upload PDF File" placeholder="Choose a .pdf file" onChange={onSelectFile} />
          <Space h="xl" />
        </>
      ) : (
        <>
          <Space h="xl" />
          <FilePreview fileUrl={fileUrl} />
          <Space h="xl" />
        </>
      )}

      {form.values.file && (
        <SimpleGrid cols={2} spacing={{ base: 80 }}>
          <Button
            type="button"
            label="Change"
            data-testid="change-file-button"
            onClick={onChangeFile}
            fullWidth
            outlined
          />
          <Button type="submit" label="Verify" data-testid="verify-file-button" loading={isUploading} fullWidth />
        </SimpleGrid>
      )}
    </form>
  )
}

export default FileUploadForm
