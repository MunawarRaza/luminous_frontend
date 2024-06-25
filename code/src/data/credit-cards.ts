import { CreditCardContract } from '@/contracts/CreditCard.contract'

export const creditCards: CreditCardContract[] = [
  {
    id: 'card_1',
    brand: 'visa',
    last4: '1234',
    exp_month: 12,
    exp_year: 2022,
    name: 'John Doe',
    address_line1: '123 Main St',
    address_city: 'Anytown',
    address_country: 'USA',
    address_zip: '12345'
  },
  {
    id: 'card_2',
    brand: 'mastercard',
    last4: '5678',
    exp_month: 12,
    exp_year: 2022,
    name: 'Jane Doe',
    address_line1: '123 Main St',
    address_city: 'Anytown',
    address_country: 'USA',
    address_zip: '12345'
  }
]
