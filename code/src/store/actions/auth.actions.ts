import AuthAPI from '@/services/auth/auth.api'
import {
  setIsForgotPassword,
  setIsResetPassword,
  setIsSigningIn,
  setIsSigningUp
} from '../slices/loaders/auth-loaders/auth-loaders.slice'
import { jwtDecode } from 'jwt-decode'
import { setLogout, setUser } from '../slices/auth/auth.slice'
import { setOrganization } from '../slices/organizations/organizations.slice'
import getErrorMessage from '@/utils/getErrorMessage'
import { createAsyncAction } from '../utils/createAsyncAction'
import { LoginData, MfaVerifyData, RegisterData, RegisterResponse } from '@/services/auth/auth.interfaces'
import { UserContract } from '@/contracts/User.contract'
import Cookie from 'js-cookie'
import { SESSION_TOKENS } from '@/constants/SESSION_TOKENS'
import { ForgotPasswordResponseInterface } from '@/services/auth/forgotPassword/forgotPassword.interface.ts'
import {
  ResetPasswordRequestInterface,
  ResetPasswordResponseInterface
} from '@/services/auth/resetPassword/resetPassword.interface.ts'

export const refreshSession = createAsyncAction<string, undefined>(
  'auth/refreshSession',
  async (_, { dispatch, rejectWithValue }) => {
    const refreshToken = Cookie.get(SESSION_TOKENS.REFRESH)
    const username = Cookie.get('username')

    if (!refreshToken) {
      return rejectWithValue('No refresh token')
    }

    try {
      const response = await AuthAPI.refresh(refreshToken, username)
      const { AuthenticationResult, Organization } = response.data
      const { IdToken, AccessToken } = AuthenticationResult
      const user: UserContract = { ...jwtDecode(IdToken), organization: Organization }

      dispatch(setUser(user))
      dispatch(setOrganization(user.organization))
      return AccessToken
    } catch (error) {
      dispatch(setLogout())
      throw error
    }
  }
)

export const loginUser = createAsyncAction<string, LoginData>(
  'auth/loginUser',
  async (payload, { dispatch, rejectWithValue }) => {
    dispatch(setIsSigningIn(true))

    try {
      const response = await AuthAPI.login(payload)
      if (response.data.ChallengeName === 'CUSTOM_CHALLENGE') {
        Cookie.set('username', payload.username)
        return response.data.Session
      } else {
        const { AuthenticationResult, Organization } = response.data
        const { IdToken, AccessToken, RefreshToken } = AuthenticationResult
        const user: UserContract = { ...jwtDecode(IdToken), organization: Organization }
        Cookie.set(SESSION_TOKENS.REFRESH, RefreshToken)
        Cookie.set('username', user.email)
        console.log('user login', user)
        dispatch(setUser(user))
        return AccessToken
      }
    } catch (error) {
      const message = getErrorMessage(error)
      return rejectWithValue(message)
    } finally {
      dispatch(setIsSigningIn(false))
    }
  }
)

export const verifyMfa = createAsyncAction<string, MfaVerifyData>(
  'auth/loginUser',
  async (payload, { dispatch, rejectWithValue }) => {
    dispatch(setIsSigningIn(true))

    try {
      const response = await AuthAPI.mfa(payload)
      console.log('mfa response', response.data)
      const { AuthenticationResult, Organization } = response.data
      const { IdToken, AccessToken, RefreshToken } = AuthenticationResult
      const user: UserContract = { ...jwtDecode(IdToken), organization: Organization }
      Cookie.set(SESSION_TOKENS.REFRESH, RefreshToken)
      Cookie.set('username', user.email)
      console.log('user login', user)
      dispatch(setUser(user))
      return AccessToken
    } catch (error) {
      const message = getErrorMessage(error)
      return rejectWithValue(message)
    } finally {
      dispatch(setIsSigningIn(false))
    }
  }
)

export const registerUser = createAsyncAction<RegisterResponse, RegisterData>(
  'auth/registerUser',
  async (payload, { dispatch, rejectWithValue }) => {
    dispatch(setIsSigningUp(true))

    try {
      const response = await AuthAPI.register(payload)
      return { token: 'token', user: response.data }
    } catch (error) {
      const message = getErrorMessage(error)
      return rejectWithValue(message)
    } finally {
      dispatch(setIsSigningUp(false))
    }
  }
)

export const forgetPassword = createAsyncAction<ForgotPasswordResponseInterface, LoginData>(
  'auth/forgotPassword',
  async (payload, { dispatch, rejectWithValue }) => {
    dispatch(setIsForgotPassword(true))

    try {
      const result = await AuthAPI.forgotPassword(payload)
      return { message: result.data.message }
    } catch (error) {
      const message = getErrorMessage(error)
      return rejectWithValue(message)
    } finally {
      dispatch(setIsForgotPassword(false))
    }
  }
)

export const resetPassword = createAsyncAction<ResetPasswordResponseInterface, ResetPasswordRequestInterface>(
  'auth/resetPassword',
  async (payload, { dispatch, rejectWithValue }) => {
    dispatch(setIsResetPassword(true))

    try {
      const result = await AuthAPI.resetPassword(payload)
      return { message: result.data.message }
    } catch (error) {
      const message = getErrorMessage(error)
      return rejectWithValue(message)
    } finally {
      dispatch(setIsResetPassword(false))
    }
  }
)

export const logoutUser = createAsyncAction<unknown>('auth/logoutUser', async (_, { getState, dispatch }) => {
  Cookie.remove(SESSION_TOKENS.REFRESH)
  Cookie.remove('username')
  const token = getState().auth.token

  try {
    await AuthAPI.logout(token)
  } catch (error) {
    console.log(error)
  } finally {
    dispatch(setLogout())
  }
})
