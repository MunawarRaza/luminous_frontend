import { Text } from '@mantine/core'
import { CardItemProps } from './CardItem.interfaces'
import styles from './CardItem.module.css'
import CreditCardImage from '@/components/atoms/CreditCardImage/CreditCardImage'
import Checkbox from '@/components/atoms/Checkbox/Checkbox'
import { CreditCardIcon } from '@heroicons/react/24/outline'

function CardItem({ cardInfo, onSelectCard, isSelected = false }: CardItemProps) {
  return (
    <button
      onClick={() => onSelectCard(cardInfo)}
      className={`${styles.CardItem} ${isSelected && styles.CardSelected}`}
      type="button"
    >
      <div className={styles.CardDescription}>
        <Checkbox checked={isSelected} />
        <CreditCardIcon className={styles.CardIcon} />
      </div>
      <div className={styles.CardDescription}>
        <Text>Bank</Text>
        <Text fw={700}>US Bankorp</Text>
      </div>
      <div className={styles.CardDescription}>
        <Text>Last 4 numbers</Text>
        <Text fw={700}>{cardInfo.last4}</Text>
      </div>
      <div className={styles.CardDescription}>
        <Text>Card Owner</Text>
        <Text fw={700}>{cardInfo.name}</Text>
      </div>
      <div className={styles.CardDescription}>
        <Text>Card Expiration</Text>
        <Text fw={700}>
          {cardInfo.exp_month}/{cardInfo.exp_year}
        </Text>
      </div>
      <CreditCardImage cardType={cardInfo.brand} />
    </button>
  )
}

export default CardItem
