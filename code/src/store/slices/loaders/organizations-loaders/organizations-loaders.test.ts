import { OrganizationsLoadersState } from './organizations-loaders-interface'
import organizationsLoadersReducer, {
  setIsFetchingOrganizations,
  setIsFetchingOrganization,
  setIsUpdatingOrganization
} from './organizations-loaders.slice'

const initialState: OrganizationsLoadersState = {
  isFetchingOrganizations: false,
  isFetchingOrganization: false,
  isUpdatingOrganization: false
}
describe('organizationsLoadersSlice', () => {
  it('Should render the initial state', () => {
    expect(organizationsLoadersReducer(undefined, { type: undefined })).toEqual(initialState)
  })

  it('should set is fetching organization to true', () => {
    const reducer = organizationsLoadersReducer(initialState, setIsFetchingOrganization(true))

    expect(reducer).toEqual({
      ...initialState,
      isFetchingOrganization: true
    })
  })

  it('should set is fetching organizations to true', () => {
    const reducer = organizationsLoadersReducer(initialState, setIsFetchingOrganizations(true))

    expect(reducer).toEqual({
      ...initialState,
      isFetchingOrganizations: true
    })
  })

  it('should set is updating organization to true', () => {
    const reducer = organizationsLoadersReducer(initialState, setIsUpdatingOrganization(true))

    expect(reducer).toEqual({
      ...initialState,
      isUpdatingOrganization: true
    })
  })
})
