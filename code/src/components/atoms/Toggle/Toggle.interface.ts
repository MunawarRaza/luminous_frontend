import { Switch } from '@mantine/core'

interface IToggleProps {
  onChange?: (checked: boolean) => void
  /** Toggle's button label */
  label: string
  /** Toggle's size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /** Toggle's error */
  error?: string
  /** Toggle's helper */
  helper?: string
  /** Toggle's disabled */
  disabled?: boolean
  /** Toggle's checked */
  isChecked?: boolean
}

export type ToggleProps = IToggleProps & typeof Switch.defaultProps
