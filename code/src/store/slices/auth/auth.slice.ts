import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { forgetPassword, loginUser, refreshSession, registerUser, resetPassword } from '../../actions/auth.actions'
import { IAuthState } from './auth.interfaces'
import { UserContract } from '@/contracts/User.contract'

const initialState: IAuthState = {
  isSignedIn: false,
  token: null,
  authError: undefined,
  user: null,
  authMessage: undefined
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserContract>) => {
      state.user = action.payload
    },
    setLogout: (state) => {
      state.isSignedIn = false
      state.token = null
      state.authError = undefined
      state.user = null
    },
    clearAuthError: (state) => {
      state.authError = undefined
    },
    clearAuthMessage: (state) => {
      state.authMessage = undefined
    }
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isSignedIn = true
        state.token = action.payload
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.authError = action.payload ?? ''
      })
      .addCase(forgetPassword.fulfilled, (state, action) => {
        state.authMessage = action.payload.message ?? ''
      })
      .addCase(forgetPassword.rejected, (state, action) => {
        state.authError = action.payload ?? ''
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.authMessage = action.payload.message ?? ''
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.authError = action.payload ?? ''
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isSignedIn = true
        state.token = action.payload.token
        state.user = action.payload.user
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.authError = action.payload ?? ''
      })
      .addCase(refreshSession.fulfilled, (state, action) => {
        state.token = action.payload
        state.isSignedIn = true
      })
  }
})

export const { setUser, setLogout, clearAuthError, clearAuthMessage } = authSlice.actions

export default authSlice.reducer
