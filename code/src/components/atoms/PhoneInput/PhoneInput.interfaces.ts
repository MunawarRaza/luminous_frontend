import { TextInput } from '@mantine/core'
import { ReactNode } from 'react'

interface IPhoneInputProps {
  /** Sets placeholder of the input */
  placeholder?: string
  /** Sets label of the input */
  label?: string
  /** Sets input smoothness */
  smoothed?: boolean
  /** Sets input onChange */
  onValueChange?: (value: string) => void
  /** Sets input helper text */
  helperText?: string | ReactNode
  /** Sets input error text */
  error?: string
  /** Sets input disabled */
  disabled?: boolean
  initialValue?: string
}

export type PhoneInputProps = IPhoneInputProps & typeof TextInput.defaultProps
