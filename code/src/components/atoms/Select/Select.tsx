import { useState } from 'react'
import { SelectProps } from './Select.interfaces'
import { Select as MantineSelect } from '@mantine/core'
import styles from './Select.module.css'

function Select({ label, placeholder, options, onSelect, clearable = false, className = '', ...props }: SelectProps) {
  const [value, setValue] = useState<string | null>(null)

  const handleChange = (selectedValue: string | null) => {
    setValue(selectedValue)
    if (onSelect && selectedValue) onSelect(selectedValue)
  }

  return (
    <MantineSelect
      data-testid="select"
      label={label}
      value={value}
      placeholder={placeholder}
      data={options}
      onChange={handleChange}
      clearable={clearable}
      className={className}
      classNames={{ label: styles.Label, input: styles.Select, dropdown: styles.Dropdown }}
      {...props}
    />
  )
}

export default Select
