interface ICheckboxProps {
  label?: string
  onChange?: (checked: boolean) => void
  checked?: boolean
  disabled?: boolean
  className?: string
}

export type CheckboxProps = ICheckboxProps
