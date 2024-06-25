import { Textarea } from '@mantine/core'

interface ITextareaInputProps {
  /** Sets label of the textarea */
  label?: string
  /** Sets handle change of the textarea */
  onChange?: (value: string) => void
  /** Sets placeholder of the textarea */
  placeholder?: string
  /** Sets disable state of the textarea */
  disabled?: boolean
  /** Sets error of the textarea */
  error?: string
  /** Sets helper text of the textarea */
  helperText?: string
  /** Sets textarea smoothness */
  smoothed?: boolean
}

export type TextareaInputProps = ITextareaInputProps & typeof Textarea.defaultProps
