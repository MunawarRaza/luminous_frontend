import { CheckboxProps } from './Checkbox.interfaces'
import { Checkbox as MantineCheckbox } from '@mantine/core'
import styles from './Checkbox.module.css'
import { useEffect, useState } from 'react'

function Checkbox({ checked = false, onChange, label = '', disabled, className = '' }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked)

  useEffect(() => {
    setIsChecked(checked)
  }, [checked])

  const handleChenge = () => {
    setIsChecked(!isChecked)
    onChange && onChange(!isChecked)
  }

  return (
    <MantineCheckbox
      data-testid="checkbox"
      className={className}
      classNames={{ input: styles.Checkbox, inner: styles.Inner, root: styles.Root }}
      labelPosition="right"
      checked={isChecked}
      c="primary.7"
      onChange={handleChenge}
      label={label}
      disabled={disabled}
    />
  )
}

export default Checkbox
