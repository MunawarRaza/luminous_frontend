import { Organization } from '@/contracts/Organization.contract'
import { createAsyncAction } from '../utils/createAsyncAction'
import organizationsApi from '@/services/organizations/organizations.api'
import { EditOrganizationData } from '@/services/organizations/organizations.interfaces'
import getErrorMessage from '@/utils/getErrorMessage'
import {
  setIsFetchingOrganization,
  setIsUpdatingOrganization
} from '../slices/loaders/organizations-loaders/organizations-loaders.slice'
import { setOrganizationsError } from '../slices/organizations/organizations.slice'
import { setNotification } from '../slices/notification/notification.slice'

export const getOrganizationById = createAsyncAction<Organization, { id: number | undefined }>(
  'organizations/getOrganizationById',
  async ({ id }, { dispatch, rejectWithValue }) => {
    dispatch(setIsFetchingOrganization(true))

    try {
      const response = await organizationsApi.getOrganizationById(id ?? 0)
      dispatch(setNotification({ message: 'Organization retrieved successfully', variant: 'success' }))
      return response.data
    } catch (error) {
      const message = getErrorMessage(error)
      dispatch(setOrganizationsError(message))
      return rejectWithValue(message)
    } finally {
      dispatch(setIsFetchingOrganization(false))
    }
  }
)

export const getCurrentUserOrganization = createAsyncAction<Organization>(
  'organization',
  async (_unknown, { dispatch, rejectWithValue }) => {
    dispatch(setIsFetchingOrganization(true))
    try {
      const response = await organizationsApi.getCurrentUserOrganization()
      dispatch(setNotification({ message: 'Organization retrieved successfully', variant: 'success' }))
      return response.data.organization
    } catch (error) {
      const message = getErrorMessage(error)
      dispatch(setOrganizationsError(message))
      return rejectWithValue(message)
    } finally {
      dispatch(setIsFetchingOrganization(false))
    }
  }
)

export const editOrganization = createAsyncAction<Organization, { body: EditOrganizationData; id: number | undefined }>(
  'organizations/editOrganization',
  async ({ body, id }, { dispatch, rejectWithValue }) => {
    dispatch(setIsUpdatingOrganization(true))

    try {
      await organizationsApi.editOrganization(body, id ?? 0)
      const response = await organizationsApi.getOrganizationById(id ?? 0)
      dispatch(setNotification({ message: 'Organization updated successfully', variant: 'success' }))
      return response.data
    } catch (error) {
      const message = getErrorMessage(error)
      dispatch(setOrganizationsError(message))
      return rejectWithValue(message)
    } finally {
      dispatch(setIsUpdatingOrganization(false))
    }
  }
)
