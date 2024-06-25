import { Card as MantineCard, useMantineColorScheme } from '@mantine/core'
import { CardProps } from './Card.interfaces'
import styles from './Card.module.css'

function Card({ children, className = '', onClick, ...props }: CardProps) {
  const { colorScheme } = useMantineColorScheme()

  return (
    <MantineCard
      data-testid="card"
      shadow="lg"
      radius="lg"
      padding="lg"
      role={onClick ? 'button' : undefined}
      classNames={{
        root: [styles.Card, styles[`Card-${colorScheme}`], className].join(' ')
      }}
      onClick={onClick}
      {...props}
    >
      {children}
    </MantineCard>
  )
}

export default Card
