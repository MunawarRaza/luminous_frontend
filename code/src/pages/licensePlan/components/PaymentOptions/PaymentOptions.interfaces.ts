import { ISubscription } from '@/contracts/subscriptions'
import { PAYMENT_OPTIONS } from './paymentOptions.enums'

export interface PaymentOptionsProps {
  subscription: ISubscription | null
  onCancel: () => void
  onConfirm: (values: PaymentOptionsValues) => void
}

export interface PaymentOptionsValues {
  paymentMethod: PAYMENT_OPTIONS | null
  cardNumber: string
  cardExpiryMonth: string
  cardExpiryYear: string
  cardCvc: string
  cardName: string
  cardPostalCode: string
  cardAddressLine1: string
  cardCity: string
  cardCountry: string
}
