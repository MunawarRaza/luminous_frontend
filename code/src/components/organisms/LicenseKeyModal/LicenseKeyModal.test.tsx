import { fireEvent, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as LicenseKeyModalStories from './LicenseKeyModal.stories'
import { render } from '@test/utils'

const { Default, Applied } = composeStories(LicenseKeyModalStories)

describe('LicenseKeyModal Component', () => {
  it('should render the form initially without crashing', () => {
    render(<Default />)
    const form = screen.getByTestId('licensekey-form')

    expect(form).toBeInTheDocument()
  })

  it('should call onLicenseApply with the license key when form is submitted', () => {
    const onLicenseApply = vi.fn()
    const { getByTestId } = render(<Default onLicenseApply={onLicenseApply} />)
    const input = getByTestId('licensekey-input')
    const button = getByTestId('licensekey-submit-button')

    fireEvent.change(input, { target: { value: '1234-5678-9012-3456-7890-1234-5678-9012' } })
    fireEvent.click(button)

    expect(onLicenseApply).toHaveBeenCalledWith('1234-5678-9012-3456-7890-1234-5678-9012')
  })

  it('should display the plan details when isApplied is true', () => {
    const { getByTestId, getByText } = render(<Applied />)
    const table = getByTestId('license-details-table')
    const refreshButton = getByTestId('license-refresh-button')
    const appliedMessage = getByText('The following plan has been credited to your account')

    expect(table).toBeInTheDocument()
    expect(refreshButton).toBeInTheDocument()
    expect(appliedMessage).toBeInTheDocument()
  })

  it('should call onClose when Refresh button is clicked and isApplied is true', () => {
    const onClose = vi.fn()
    const { getByTestId } = render(<Applied onClose={onClose} />)
    const button = getByTestId('license-refresh-button')

    fireEvent.click(button)

    expect(onClose).toHaveBeenCalled()
  })
})
