interface IFileInputProps {
  label: string
  placeholder?: string
  onChange: (payload: File[] | File | null) => void
  isMultiple?: boolean
  acceptedFiles?: string
  handleRemove?: () => void
}

export type FileInputProps = IFileInputProps
