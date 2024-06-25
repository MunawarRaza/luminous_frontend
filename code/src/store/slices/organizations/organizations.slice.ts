import { createSlice } from '@reduxjs/toolkit'
import { OrganizationsState } from './organizations.interface'
import {
  editOrganization,
  getCurrentUserOrganization,
  getOrganizationById
} from '@/store/actions/organizations.actions'

const initialState: OrganizationsState = {
  organizations: [],
  organization: undefined,
  organizationsError: null
}

const organizationsSlice = createSlice({
  name: 'organizations',
  initialState,
  reducers: {
    setOrganizations(state, action) {
      state.organizations = action.payload
    },
    setOrganization(state, action) {
      state.organization = action.payload
    },
    setOrganizationsError(state, action) {
      state.organizationsError = action.payload
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getCurrentUserOrganization.fulfilled, (state, action) => {
        state.organization = action.payload
      })
      .addCase(getOrganizationById.fulfilled, (state, action) => {
        state.organization = action.payload
      })
      .addCase(editOrganization.fulfilled, (state, action) => {
        state.organization = action.payload
      })
  }
})

export const { setOrganization, setOrganizationsError } = organizationsSlice.actions

export default organizationsSlice.reducer
