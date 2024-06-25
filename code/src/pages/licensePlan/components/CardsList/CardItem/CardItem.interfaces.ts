import { CreditCardContract } from '@/contracts/CreditCard.contract'

export interface CardItemProps {
  cardInfo: CreditCardContract
  isSelected: boolean
  onSelectCard: (card: CreditCardContract) => void
}
