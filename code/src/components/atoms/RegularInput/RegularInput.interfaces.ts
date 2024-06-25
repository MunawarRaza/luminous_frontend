import { TextInput } from '@mantine/core'
import { ReactNode } from 'react'

interface IRegularInputProps {
  /** Sets placeholder of the input */
  placeholder?: string
  /** Sets label of the input */
  label?: string
  /** Sets input type */
  type?: 'text' | 'email' | 'password' | 'number'
  /** Sets input onChange */
  onValueChange?: (value: string) => void
  /** Sets input helper text */
  helperText?: string | ReactNode
  /** Sets input error text */
  error?: string
  /** Sets input disabled */
  disabled?: boolean
}

export type RegularInputProps = IRegularInputProps & typeof TextInput.defaultProps
