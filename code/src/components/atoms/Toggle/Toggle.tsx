import { Switch } from '@mantine/core'
import { useState } from 'react'
import styles from './Toggle.module.css'
import { ToggleProps } from './Toggle.interface'

function Toggle({
  onChange,
  label = '',
  size = 'md',
  isChecked = false,
  disabled,
  error,
  helper,
  ...rest
}: ToggleProps) {
  const [checked, setChecked] = useState<boolean>(isChecked)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return

    setChecked((prev) => !prev)
    onChange && onChange(event.currentTarget.checked)
  }

  return (
    <Switch
      data-testid="toggle"
      checked={checked}
      onChange={handleChange}
      disabled={disabled}
      classNames={{ track: !checked ? styles.toggleLabel : '' }}
      label={label}
      size={size}
      error={error}
      description={helper}
      {...rest}
    />
  )
}

export default Toggle
