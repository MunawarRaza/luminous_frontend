import { createSlice } from '@reduxjs/toolkit'
import { UsersState } from './users.interface'
import {
  deleteUserAccount,
  editUserAccount,
  getUsersAccounts,
  createUserAccount,
  verifyUserAccount,
  getOrganizationUsersAccounts
} from '@/store/actions/users.actions'

const initialState: UsersState = {
  users: [],
  user: null,
  usersError: null
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload
    },
    setUsersError(state, action) {
      state.usersError = action.payload
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getUsersAccounts.fulfilled, (state, action) => {
        state.users = action.payload
      })
      .addCase(createUserAccount.fulfilled, (state, action) => {
        state.users = action.payload
      })
      .addCase(editUserAccount.fulfilled, (state, action) => {
        state.users = action.payload
      })
      .addCase(deleteUserAccount.fulfilled, (state, action) => {
        state.users = action.payload
      })
      .addCase(verifyUserAccount.fulfilled, (state, action) => {
        state.users = action.payload
      })
      .addCase(getOrganizationUsersAccounts.fulfilled, (state, action) => {
        state.users = action.payload
      })
  }
})

export const { setUsers, setUsersError } = usersSlice.actions

export default usersSlice.reducer
