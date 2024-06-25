import { TextInput } from '@mantine/core'
import { useState } from 'react'
import { PhoneInputProps } from './PhoneInput.interfaces'
import styles from './PhoneInput.module.css'
import formatPhoneNumber from '@/helpers/formatters/format-phone'

function PhoneInput({
  label,
  placeholder,
  error,
  helperText,
  disabled,
  onValueChange,
  smoothed = true,
  initialValue,
  ...props
}: PhoneInputProps) {
  const inputStyles = [styles.phoneInput, error && styles.errorInput]
  const [value, setValue] = useState(initialValue)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return

    const formattedPhoneNumber = formatPhoneNumber(event.target.value)
    setValue(formattedPhoneNumber)
    onValueChange?.(formattedPhoneNumber)
  }

  return (
    <TextInput
      data-testid="phone-input"
      {...props}
      classNames={{ input: inputStyles.join(' '), label: styles.label, error: styles.error }}
      type="text"
      label={label}
      placeholder={placeholder}
      radius={smoothed ? 'md' : 0}
      onChange={handleChange}
      value={value}
      error={error}
      description={helperText}
      disabled={disabled}
      inputWrapperOrder={['label', 'input', 'description', 'error']}
    />
  )
}

export default PhoneInput
