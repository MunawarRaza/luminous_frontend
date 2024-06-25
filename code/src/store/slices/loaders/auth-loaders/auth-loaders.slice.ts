import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IAuthLoaderState } from './auth-loaders.interfaces'

const initialState: IAuthLoaderState = {
  isSigningIn: false,
  isSigningUp: false,
  isSigningOut: false,
  isRecoveringPassword: false,
  isForgotPassword: false,
  isResetPassword: false
}

const authLoaderSlice = createSlice({
  name: 'authLoader',
  initialState,
  reducers: {
    setIsSigningIn: (state, action: PayloadAction<boolean>) => {
      state.isSigningIn = action.payload
    },
    setIsSigningUp: (state, action: PayloadAction<boolean>) => {
      state.isSigningUp = action.payload
    },
    setIsSigningOut: (state, action: PayloadAction<boolean>) => {
      state.isSigningOut = action.payload
    },
    setIsRecoveringPassword: (state, action: PayloadAction<boolean>) => {
      state.isRecoveringPassword = action.payload
    },
    setIsForgotPassword: (state, action: PayloadAction<boolean>) => {
      state.isForgotPassword = action.payload
    },
    setIsResetPassword: (state, action: PayloadAction<boolean>) => {
      state.isResetPassword = action.payload
    }
  }
})

export const {
  setIsSigningIn,
  setIsSigningUp,
  setIsSigningOut,
  setIsRecoveringPassword,
  setIsForgotPassword,
  setIsResetPassword
} = authLoaderSlice.actions

export default authLoaderSlice.reducer
