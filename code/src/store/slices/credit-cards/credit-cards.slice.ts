import { createSlice } from '@reduxjs/toolkit'
import { CreditCardsState } from './cards.interfaces'

const initialState: CreditCardsState = {
  cards: [],
  selectedCard: null,
  error: null
}

const creditCardsSlice = createSlice({
  name: 'creditCards',
  initialState,
  reducers: {
    setCards(state, action) {
      state.cards = action.payload
    },
    setSelectedCard(state, action) {
      state.selectedCard = action.payload
    },
    setError(state, action) {
      state.error = action.payload
    }
  }
})

export const { setCards, setSelectedCard, setError } = creditCardsSlice.actions
export default creditCardsSlice.reducer
