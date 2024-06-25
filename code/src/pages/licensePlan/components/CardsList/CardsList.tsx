import { creditCards } from '@/data/credit-cards'
import CardItem from './CardItem/CardItem'
import { CardsListProps } from './CardsList.interfaces'
import styles from './CardsList.module.css'

function CardsList({ onSelectCard, selectedCard }: CardsListProps) {
  return (
    <div className={styles.CardsWrapper}>
      <CardItem cardInfo={creditCards[0]} isSelected={selectedCard === creditCards[0]} onSelectCard={onSelectCard} />
      <CardItem cardInfo={creditCards[1]} isSelected={selectedCard === creditCards[1]} onSelectCard={onSelectCard} />
    </div>
  )
}

export default CardsList
