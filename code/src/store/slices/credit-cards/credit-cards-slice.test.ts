import { CreditCardsState } from './cards.interfaces'
import creditCardsSlice, { setCards, setSelectedCard, setError } from './credit-cards.slice'

const initialState: CreditCardsState = {
  cards: [],
  selectedCard: null,
  error: null
}

describe('creditCardsSlice', () => {
  it('Should render the initial state', () => {
    expect(creditCardsSlice(undefined, { type: undefined })).toEqual(initialState)
  })

  it('should set cards', () => {
    const listOfCards = [
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
      }
    ]

    const reducer = creditCardsSlice(initialState, setCards(listOfCards))

    expect(reducer).toEqual({
      ...initialState,
      cards: listOfCards
    })
  })

  it('should set selected card', () => {
    const selectedCard = {
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
    }

    const reducer = creditCardsSlice(initialState, setSelectedCard(selectedCard))

    expect(reducer).toEqual({
      ...initialState,
      selectedCard
    })
  })

  it('should set error', () => {
    const error = 'there is a card error'

    const reducer = creditCardsSlice(initialState, setError(error))

    expect(reducer).toEqual({
      ...initialState,
      error
    })
  })
})
