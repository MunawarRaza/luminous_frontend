import { FileInputProps } from './FileInput.interfaces'
import { FileInput as MantineFileInput } from '@mantine/core'
import styles from './FileInput.module.css'
import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline'

function FileInput({ label, placeholder, isMultiple = false, onChange, acceptedFiles = '.pdf' }: FileInputProps) {
  return (
    <MantineFileInput
      fileInputProps={{
        // @ts-expect-error - data-testid is not a valid prop
        'data-testid': 'file-input'
      }}
      classNames={{ label: styles.Label, input: styles.FileInput }}
      label={label}
      placeholder={placeholder}
      multiple={isMultiple}
      onChange={(files) => {
        onChange && onChange(files)
      }}
      rightSection={<DocumentMagnifyingGlassIcon className={styles.FileIcon} />}
      accept={acceptedFiles}
    />
  )
}

export default FileInput
