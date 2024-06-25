import { UsersLoadersState } from './users-loaders-interface'
import usersLoadersReducer, {
  setIsCreatingUser,
  setIsDeletingUser,
  setIsFetchingUser,
  setIsFetchingUsers,
  setIsUpdatingUser
} from './users-loaders.slice'

const initialState: UsersLoadersState = {
  isFetchingUsers: false,
  isFetchingUser: false,
  isCreatingUser: false,
  isUpdatingUser: false,
  isDeletingUser: false
}
describe('authLoadersSlice', () => {
  it('Should render the initial state', () => {
    expect(usersLoadersReducer(undefined, { type: undefined })).toEqual(initialState)
  })

  it('should set is creating user to true', () => {
    const reducer = usersLoadersReducer(initialState, setIsCreatingUser(true))

    expect(reducer).toEqual({
      ...initialState,
      isCreatingUser: true
    })
  })

  it('should set is deleting user to true', () => {
    const reducer = usersLoadersReducer(initialState, setIsDeletingUser(true))

    expect(reducer).toEqual({
      ...initialState,
      isDeletingUser: true
    })
  })

  it('should set is fetching user to true', () => {
    const reducer = usersLoadersReducer(initialState, setIsFetchingUser(true))

    expect(reducer).toEqual({
      ...initialState,
      isFetchingUser: true
    })
  })

  it('should set is fetchin users to true', () => {
    const reducer = usersLoadersReducer(initialState, setIsFetchingUsers(true))

    expect(reducer).toEqual({
      ...initialState,
      isFetchingUsers: true
    })
  })

  it('should set is updating user to true', () => {
    const reducer = usersLoadersReducer(initialState, setIsUpdatingUser(true))

    expect(reducer).toEqual({
      ...initialState,
      isUpdatingUser: true
    })
  })
})
