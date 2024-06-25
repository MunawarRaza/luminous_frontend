interface ICreditCardInputProps {
  label?: string
  placeholder?: string
  onValueChange?: (value: string) => void
  error?: string
  disabled?: boolean
}

export type CreditCardInputProps = ICreditCardInputProps
