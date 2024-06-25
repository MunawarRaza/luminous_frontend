import { fireEvent, screen, waitFor } from '@testing-library/react'
import { renderWithProviders } from '@test/utils'
import * as MfaModalStories from './MfaModal.stories'
import { composeStories } from '@storybook/react'

const { DefaultForm, FormWithError } = composeStories(MfaModalStories)

describe('MfaModal Component', () => {
  it('should render component', () => {
    renderWithProviders(<DefaultForm />)

    const mfaForm = screen.getByTestId('mfa-form')
    expect(mfaForm).toBeInTheDocument()
  })

  it('should shows error message', async () => {
    const onSubmit = vi.fn()

    renderWithProviders(<FormWithError onSubmit={onSubmit} message="Error message" />)
    const alertComponent = screen.getByTestId('alert-message')

    expect(alertComponent).toBeInTheDocument()
  })

  it("should close error message when clicking on 'x' button", async () => {
    const onSubmit = vi.fn()
    renderWithProviders(<FormWithError onSubmit={onSubmit} message="Error message" />)

    const alertComponent = screen.getByTestId('alert-message')
    const closeButton = alertComponent.querySelector('button')

    expect(alertComponent).toBeInTheDocument()

    closeButton && fireEvent.click(closeButton)

    await waitFor(() => expect(alertComponent).not.toBeInTheDocument())
  })
})
