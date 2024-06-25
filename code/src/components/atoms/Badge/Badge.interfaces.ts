import { MantineColor } from '@mantine/core'

interface IBadgeProps {
  children: React.ReactNode
  color?: MantineColor
  size?: string
  variant?: string
}

export type BadgeProps = IBadgeProps
