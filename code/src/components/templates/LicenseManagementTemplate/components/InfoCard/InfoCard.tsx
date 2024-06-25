import Card from '@/components/atoms/Card/Card'
import { Text } from '@mantine/core'
import { InfoCardProps } from './InfoCard.interfaces'
import styles from './InfoCard.module.css'

function InfoCard({ title, number, maximum }: InfoCardProps) {
  return (
    <Card className={styles.InfoCard}>
      <Text fw={700}>{title}</Text>
      <Text fw={700} className={styles.Number}>
        {number}
        {maximum ? `/${maximum}` : ''}
      </Text>
    </Card>
  )
}

export default InfoCard
