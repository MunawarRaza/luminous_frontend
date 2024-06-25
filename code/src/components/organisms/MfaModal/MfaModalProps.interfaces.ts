export interface MfaModalProps {
  onCancel?: () => void
  onSubmit?: (AccessToken?: string) => void
  session?: string
  isLoading?: boolean
  message?: string
}

export interface MfaFormValues {
  code: string[]
  focusedIndex: number
}
