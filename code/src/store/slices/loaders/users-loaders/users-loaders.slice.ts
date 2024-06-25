import { createSlice } from '@reduxjs/toolkit'
import { UsersLoadersState } from './users-loaders-interface'

const initalState: UsersLoadersState = {
  isFetchingUsers: false,
  isFetchingUser: false,
  isCreatingUser: false,
  isUpdatingUser: false,
  isDeletingUser: false
}

const usersLoadersSlice = createSlice({
  name: 'usersLoaders',
  initialState: initalState,
  reducers: {
    setIsFetchingUsers(state, action) {
      state.isFetchingUsers = action.payload
    },
    setIsFetchingUser(state, action) {
      state.isFetchingUser = action.payload
    },
    setIsCreatingUser(state, action) {
      state.isCreatingUser = action.payload
    },
    setIsUpdatingUser(state, action) {
      state.isUpdatingUser = action.payload
    },
    setIsDeletingUser(state, action) {
      state.isDeletingUser = action.payload
    }
  }
})

export const { setIsFetchingUsers, setIsFetchingUser, setIsCreatingUser, setIsUpdatingUser, setIsDeletingUser } =
  usersLoadersSlice.actions

export default usersLoadersSlice.reducer
