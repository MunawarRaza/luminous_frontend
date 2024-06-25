import { USER_ROLES } from '@/enums/userRoles'
import { IAuthState } from './auth.interfaces'
import authReducer, { setUser, setLogout } from './auth.slice'

const initialState: IAuthState = {
  isSignedIn: false,
  token: null,
  authError: undefined,
  user: null
}

describe('authSlice', () => {
  it('Should render the initial state', () => {
    expect(authReducer(undefined, { type: undefined })).toEqual(initialState)
  })

  it('Should set the user', () => {
    expect(
      authReducer(
        initialState,
        setUser({
          id: 1,
          name: 'Roger',
          email: 'thelea12@gmail.com',
          created_at: '2021-08-02T15:00:00.000000Z',
          role: {
            id: 1,
            name: USER_ROLES.SUPER_ADMIN
          },
          organization: {
            id: 1,
            organization_name: 'Test Organization',
            address: 'Test Street',
            phone: '123-456-789',
            email: 'test@company.com',
            createdAt: 'date of creation',
            updatedAt: 'date of update'
          }
        })
      )
    ).toEqual({
      ...initialState,
      user: {
        id: 1,
        name: 'Roger',
        email: 'thelea12@gmail.com',
        created_at: '2021-08-02T15:00:00.000000Z',
        role: {
          id: 1,
          name: USER_ROLES.SUPER_ADMIN
        },
        organization: {
          id: 1,
          organization_name: 'Test Organization',
          address: 'Test Street',
          phone: '123-456-789',
          email: 'test@company.com',
          createdAt: 'date of creation',
          updatedAt: 'date of update'
        }
      }
    })
  })

  it('Should set the initial state when the user logs out', () => {
    const reducer = authReducer(
      {
        ...initialState,
        isSignedIn: true,
        token: '123',
        user: {
          id: 1,
          name: 'Roger',
          email: 'thelea12@gmail.com',
          created_at: '2021-08-02T15:00:00.000000Z',
          role: {
            id: 1,
            name: USER_ROLES.SUPER_ADMIN
          },
          organization: {
            id: 1,
            organization_name: 'Test Organization',
            address: 'Test Street',
            phone: '123-456-789',
            email: 'test@company.com',
            createdAt: 'date of creation',
            updatedAt: 'date of update'
          }
        }
      },
      setLogout()
    )

    expect(reducer).toEqual(initialState)
  })
})
