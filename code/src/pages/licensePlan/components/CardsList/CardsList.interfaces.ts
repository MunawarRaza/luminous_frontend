import { CreditCardContract } from '@/contracts/CreditCard.contract'

export interface CardsListProps {
  onSelectCard: (card: CreditCardContract) => void
  selectedCard: CreditCardContract | null
}
