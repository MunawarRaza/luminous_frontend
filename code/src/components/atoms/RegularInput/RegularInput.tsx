import { TextInput as MantineInput } from '@mantine/core'
import styles from './RegularInput.module.css'
import { RegularInputProps } from './RegularInput.interfaces'
import { useState } from 'react'

function RegularInput({
  type = 'text',
  onValueChange,
  placeholder,
  label,
  helperText,
  error = '',
  disabled,
  ...props
}: RegularInputProps) {
  const inputStyles = [styles.regularInput, error && styles.errorInput]
  const [value, setValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return

    const { value } = event.target
    setValue(value)
    onValueChange && onValueChange(value)
  }

  return (
    <MantineInput
      data-testid="regular-input"
      classNames={{
        input: inputStyles.join(' '),
        label: styles.label,
        error: styles.error,
        required: styles.required,
        section: styles.section
      }}
      radius="md"
      label={label}
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      description={helperText}
      error={error}
      disabled={disabled}
      inputWrapperOrder={['label', 'input', 'description', 'error']}
      {...props}
    />
  )
}

export default RegularInput
