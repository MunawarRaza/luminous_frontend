import { createSlice } from '@reduxjs/toolkit'
import { OrganizationsLoadersState } from './organizations-loaders-interface'

const initalState: OrganizationsLoadersState = {
  isFetchingOrganizations: false,
  isFetchingOrganization: false,
  isUpdatingOrganization: false
}

const organizationsLoadersSlice = createSlice({
  name: 'organizationsLoaders',
  initialState: initalState,
  reducers: {
    setIsFetchingOrganizations(state, action) {
      state.isFetchingOrganizations = action.payload
    },
    setIsFetchingOrganization(state, action) {
      state.isFetchingOrganization = action.payload
    },
    setIsUpdatingOrganization(state, action) {
      state.isUpdatingOrganization = action.payload
    }
  }
})

export const { setIsFetchingOrganizations, setIsFetchingOrganization, setIsUpdatingOrganization } =
  organizationsLoadersSlice.actions

export default organizationsLoadersSlice.reducer
