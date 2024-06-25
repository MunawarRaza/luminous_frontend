import { composeStories } from '@storybook/react'
import * as LicensePlanTemplateStories from './LicensePlanTemplate.stories'
import { render } from '@test/utils'
import { fireEvent } from '@testing-library/react'

const { Default } = composeStories(LicensePlanTemplateStories)

describe('LicensePlanTemplate Component', () => {
  it('should render without crashing', () => {
    const { getByText } = render(<Default />)
    expect(getByText('License Plan')).toBeInTheDocument()
  })

  it('should open the Contact Us modal when Contact a Sales Rep button is clicked', () => {
    const { getByTestId } = render(<Default />)
    const button = getByTestId('contact-sales-button')

    fireEvent.click(button)

    const contactUsModal = getByTestId('contact-us-modal')

    expect(contactUsModal).toBeInTheDocument()
  })

  it('should open the License Key modal when I Have a License Key button is clicked', () => {
    const { getByTestId } = render(<Default />)
    const button = getByTestId('add-license-button')

    fireEvent.click(button)

    const licenseKeyModal = getByTestId('license-key-modal')

    expect(licenseKeyModal).toBeInTheDocument()
  })

  it('should close the modal when onClose is called', async () => {
    const { getByTestId, queryByTestId } = render(<Default />)
    const openButton = getByTestId('add-license-button')

    fireEvent.click(openButton)

    const licenseKeyModal = getByTestId('license-key-modal')
    expect(licenseKeyModal).toBeInTheDocument()

    const closeButton = licenseKeyModal.querySelector('button[aria-label="Close modal"]')
    closeButton && fireEvent.click(closeButton)

    expect(queryByTestId('license-key-modal')).not.toBeInTheDocument()
  })
})
