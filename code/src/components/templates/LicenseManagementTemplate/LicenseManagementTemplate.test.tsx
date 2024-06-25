import { fireEvent, screen, waitFor } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as LicenseManagementTemplateStories from './LicenseManagementTemplate.stories'
import { render } from '@test/utils'

const { Default } = composeStories(LicenseManagementTemplateStories)

describe('LicenseManagementTemplate Component', () => {
  it('should render component', () => {
    render(<Default />)
    expect(screen.getByText(/License Management/i)).toBeInTheDocument()
  })

  it('should open the Cancel Subscription modal when Cancel Subscription button is clicked', async () => {
    const { getByTestId } = render(<Default />)
    const button = getByTestId('cancel-subscription-button')

    fireEvent.click(button)

    await waitFor(() => {
      const CancelSubscriptionForm = screen.getByTestId('cancel-subscription-form')
      expect(CancelSubscriptionForm).toBeInTheDocument()
    })
  })

  it('should open the Request License modal when Request License button is clicked', async () => {
    const { getByTestId } = render(<Default />)
    const button = getByTestId('request-license-button')

    fireEvent.click(button)

    await waitFor(() => {
      const RequestLicenseForm = screen.getByTestId('request-license-form')
      expect(RequestLicenseForm).toBeInTheDocument()
    })
  })

  it('should close the modal when the close button is clicked', async () => {
    const { getByTestId } = render(<Default />)
    const button = getByTestId('cancel-subscription-button')

    fireEvent.click(button)

    await waitFor(() => {
      const CancelSubscriptionForm = screen.getByTestId('cancel-subscription-form')
      expect(CancelSubscriptionForm).toBeInTheDocument()
    })

    const closeModalButton = screen.getByLabelText('Close modal')

    fireEvent.click(closeModalButton)

    await waitFor(() => {
      const CancelSubscriptionForm = screen.queryByTestId('cancel-subscription-form')
      expect(CancelSubscriptionForm).not.toBeInTheDocument()
    })
  })
})
