import { Card } from '@mantine/core'

interface ICardProps {
  children: React.ReactNode
  onClick?: () => void
}

export type CardProps = ICardProps & typeof Card.defaultProps
