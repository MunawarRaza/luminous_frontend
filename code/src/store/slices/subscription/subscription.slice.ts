import { ISubscription } from '@/contracts/subscriptions'
import { createSlice } from '@reduxjs/toolkit'

const initialState: ISubscription | null = null

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    setSubscription: (_, action) => {
      return action.payload
    },
    removeSubscription: () => {
      return null
    }
  }
})

export const { setSubscription, removeSubscription } = subscriptionSlice.actions

export default subscriptionSlice.reducer
