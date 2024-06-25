import { UserAccountContract } from '@/contracts/UserAccount.contract'
import { createAsyncAction } from '../utils/createAsyncAction'
import UsersAPI from '@/services/users/users.api'
import organizationsApi from '@/services/organizations/organizations.api'
import getErrorMessage from '@/utils/getErrorMessage'
import {
  setIsDeletingUser,
  setIsFetchingUsers,
  setIsUpdatingUser,
  setIsCreatingUser
} from '../slices/loaders/users-loaders/users-loaders.slice'
import { setUsersError } from '../slices/users/users.slice'
import { EditUserData, CreateUserData, VerifyUserData } from '@/services/users/users.interfaces'
import { setNotification } from '../slices/notification/notification.slice'
import Cookie from 'js-cookie'

export const getUsersAccounts = createAsyncAction<UserAccountContract[], undefined>(
  'users/getUsersAccounts',
  async (_, { dispatch, rejectWithValue }) => {
    dispatch(setIsFetchingUsers(true))

    try {
      const response = await UsersAPI.getUsers()
      const { data } = response
      return data
    } catch (error) {
      const message = getErrorMessage(error)
      dispatch(setUsersError(message))
      return rejectWithValue(message)
    } finally {
      dispatch(setIsFetchingUsers(false))
    }
  }
)

export const getOrganizationUsersAccounts = createAsyncAction<
  UserAccountContract[],
  { organizationId: number | undefined; itemsPerPage: number }
>('api/v1/organizations/{id}/users', async ({ organizationId, itemsPerPage }, { dispatch, rejectWithValue }) => {
  dispatch(setIsFetchingUsers(true))

  try {
    const response = await organizationsApi.getOrganizationUsers(organizationId ?? 0, itemsPerPage)
    const { data } = response
    return data.data
  } catch (error) {
    const message = getErrorMessage(error)
    dispatch(setUsersError(message))
    return rejectWithValue(message)
  } finally {
    dispatch(setIsFetchingUsers(false))
  }
})

export const createUserAccount = createAsyncAction<UserAccountContract[], { body: CreateUserData }>(
  'users/createUserAccount',
  async ({ body }, { dispatch, rejectWithValue }) => {
    dispatch(setIsCreatingUser(true))

    try {
      const orgId = Cookie.get('organizationId')
      await UsersAPI.createUser(body, orgId)
      const response = await UsersAPI.getUsers()
      dispatch(setNotification({ message: 'User created successfully', variant: 'success' }))
      return response.data
    } catch (error) {
      const message = getErrorMessage(error)
      dispatch(setUsersError(message))
      return rejectWithValue(message)
    } finally {
      dispatch(setIsCreatingUser(false))
    }
  }
)

export const editUserAccount = createAsyncAction<UserAccountContract[], { body: EditUserData; id: number | undefined }>(
  'users/editUserAccount',
  async ({ body, id }, { dispatch, rejectWithValue }) => {
    dispatch(setIsUpdatingUser(true))

    try {
      await UsersAPI.editUser(body, id ?? 0)
      const response = await UsersAPI.getUsers()
      dispatch(setNotification({ message: 'User updated successfully', variant: 'success' }))
      return response.data
    } catch (error) {
      const message = getErrorMessage(error)
      dispatch(setUsersError(message))
      return rejectWithValue(message)
    } finally {
      dispatch(setIsUpdatingUser(false))
    }
  }
)

export const deleteUserAccount = createAsyncAction<UserAccountContract[], number>(
  'users/deleteUserAccount',
  async (id, { dispatch, rejectWithValue }) => {
    dispatch(setIsDeletingUser(true))

    try {
      await UsersAPI.deleteUser(id)
      const response = await UsersAPI.getUsers()
      dispatch(setNotification({ message: 'User deleted successfully', variant: 'success' }))
      return response.data
    } catch (error) {
      const message = getErrorMessage(error)
      dispatch(setUsersError(message))
      return rejectWithValue(message)
    } finally {
      dispatch(setIsDeletingUser(false))
    }
  }
)

export const verifyUserAccount = createAsyncAction<
  UserAccountContract[],
  { body: VerifyUserData; id: number | undefined }
>('users/verifyUserAccount', async ({ body, id }, { dispatch, rejectWithValue }) => {
  dispatch(setIsUpdatingUser(true))

  try {
    await UsersAPI.verifyUser(body, id ?? 0)
    const response = await UsersAPI.getUsers()
    dispatch(setNotification({ message: `User's Application Accepted`, variant: 'success' }))
    return response.data
  } catch (error) {
    const message = getErrorMessage(error)
    dispatch(setUsersError(message))
    return rejectWithValue(message)
  } finally {
    dispatch(setIsUpdatingUser(false))
  }
})
