import { CreditCardContract } from '@/contracts/CreditCard.contract'

export interface CreditCardsState {
  cards: CreditCardContract[]
  selectedCard: CreditCardContract | null
  error: string | null
}
