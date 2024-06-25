import { IAuthLoaderState } from './auth-loaders.interfaces'
import authLoadersReducer, {
  setIsSigningIn,
  setIsSigningOut,
  setIsSigningUp,
  setIsRecoveringPassword
} from './auth-loaders.slice'

const initialState: IAuthLoaderState = {
  isSigningIn: false,
  isSigningUp: false,
  isSigningOut: false,
  isRecoveringPassword: false,
  isForgotPassword: false,
  isResetPassword: false
}

describe('authLoadersSlice', () => {
  it('Should render the initial state', () => {
    expect(authLoadersReducer(undefined, { type: undefined })).toEqual(initialState)
  })

  it('should set signing in to true', () => {
    const reducer = authLoadersReducer(initialState, setIsSigningIn(true))

    expect(reducer).toEqual({
      ...initialState,
      isSigningIn: true
    })
  })

  it('should set signing up to true', () => {
    const reducer = authLoadersReducer(initialState, setIsSigningUp(true))

    expect(reducer).toEqual({
      ...initialState,
      isSigningUp: true
    })
  })

  it('should set signing out to true', () => {
    const reducer = authLoadersReducer(initialState, setIsSigningOut(true))

    expect(reducer).toEqual({
      ...initialState,
      isSigningOut: true
    })
  })

  it('should set recovering password to true', () => {
    const reducer = authLoadersReducer(initialState, setIsRecoveringPassword(true))

    expect(reducer).toEqual({
      ...initialState,
      isRecoveringPassword: true
    })
  })
})
