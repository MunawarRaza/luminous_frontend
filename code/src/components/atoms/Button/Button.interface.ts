import { Button } from '@mantine/core'

interface IButtonProps {
  /** Button's label */
  label: string
  /** Is this a secondary button? */
  secondary?: boolean
  /** Is this an outlined button? */
  outlined?: boolean
  /** Select pre-defined button size  */
  size?: 'sm' | 'md' | 'lg'
  /** Is this button disabled? */
  disabled?: boolean
  /** Action to do on click */
  onClick?: () => void
}

export type ButtonProps = IButtonProps & typeof Button.defaultProps
