import { Button as MantineButton, useMantineColorScheme } from '@mantine/core'
import { ButtonProps } from './Button.interface'
import classes from './Button.module.css'
import { ColorSchemes } from '@/enums/colorSchemes'
/** Simple Button for users interaction */
const Button = ({
  label,
  outlined = false,
  secondary = false,
  size = 'md',
  disabled = false,
  onClick = () => null,
  fullWidth = false,
  leftSection = <span></span>,
  rightSection = <span></span>,
  ...props
}: ButtonProps) => {
  const { colorScheme } = useMantineColorScheme()

  const color = secondary || colorScheme === ColorSchemes.DARK ? 'secondary' : 'primary'

  const styleList: string[] = [classes.base, classes[color]]
  fullWidth && styleList.push(classes.fullWidth)
  outlined && styleList.push(classes.outline)

  const styles = styleList.join(' ')

  return (
    <MantineButton
      data-testid="button"
      classNames={{ root: styles }}
      justify="space-between"
      onClick={onClick}
      disabled={disabled}
      leftSection={leftSection}
      rightSection={rightSection}
      size={size}
      {...props}
    >
      {label}
    </MantineButton>
  )
}

export default Button
