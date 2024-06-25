import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { NotificationState } from './notification.interfaces'

const intialState: NotificationState = {
  variant: 'success',
  message: '',
  show: false
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState: intialState,
  reducers: {
    setNotification: (state, action: PayloadAction<Pick<NotificationState, 'variant' | 'message'>>) => {
      state.variant = action.payload.variant
      state.message = action.payload.message
      state.show = true
    },
    clearNotification: () => {
      return intialState
    }
  }
})

export const { setNotification, clearNotification } = notificationSlice.actions

export default notificationSlice.reducer
