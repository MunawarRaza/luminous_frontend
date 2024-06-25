import { fireEvent, screen, waitFor } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as ContactUsModalStories from './ContactUsModal.stories'
import { render } from '@test/utils'

const { Default } = composeStories(ContactUsModalStories)

describe('ContactUsModal Component', () => {
  it('should render component', () => {
    render(<Default />)

    const form = screen.getByTestId('contactus-form')
    expect(form).toBeInTheDocument()
  })

  it('should handle input changes', () => {
    const { getByTestId } = render(<Default />)
    const textarea = getByTestId('contactus-textarea')
    const emailInput = getByTestId('contactus-email-input')
    const phoneInput = getByTestId('contactus-phone-input')

    fireEvent.change(textarea, { target: { value: 'Some needs' } })
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(phoneInput, { target: { value: '(123) 456-7890' } })

    expect(textarea).toHaveValue('Some needs')
    expect(emailInput).toHaveValue('test@example.com')
    expect(phoneInput).toHaveValue('(123) 456-7890')
  })

  it('should call onClose after 3 seconds when form is submitted', async () => {
    const onClose = vi.fn()
    const { getByTestId } = render(<Default onClose={onClose} />)
    const textarea = getByTestId('contactus-textarea')
    const emailInput = getByTestId('contactus-email-input')
    const phoneInput = getByTestId('contactus-phone-input')

    fireEvent.change(textarea, { target: { value: 'Some needs' } })
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(phoneInput, { target: { value: '(123) 456-7890' } })

    const submitButton = getByTestId('contactus-submit-button')

    fireEvent.click(submitButton)

    await waitFor(() => expect(onClose).toHaveBeenCalled(), { timeout: 3500 })
  })

  it('should display thank you message after form is submitted', () => {
    const { getByTestId } = render(<Default />)
    const textarea = getByTestId('contactus-textarea')
    const emailInput = getByTestId('contactus-email-input')
    const phoneInput = getByTestId('contactus-phone-input')

    fireEvent.change(textarea, { target: { value: 'Some needs' } })
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(phoneInput, { target: { value: '(123) 456-7890' } })

    const submitButton = getByTestId('contactus-submit-button')

    fireEvent.click(submitButton)

    expect(getByTestId('contactus-form')).toHaveTextContent(
      'Thank you for your request, we will get back to you as soon as we can'
    )
  })
})
