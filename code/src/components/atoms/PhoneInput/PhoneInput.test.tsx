import { composeStories } from '@storybook/react'
import * as PhoneInputStories from './PhoneInput.stories'
import { render } from '@test/utils'
import { fireEvent, screen } from '@testing-library/react'

const { DefaultPhoneInput, DisabledPhoneInput, SharpedPhoneInput, PhoneInputWithError } =
  composeStories(PhoneInputStories)

describe('PhoneInput', () => {
  test('renders default phone input', () => {
    render(<DefaultPhoneInput />)
    const inputElement = screen.getByTestId('phone-input')

    expect(inputElement).toBeInTheDocument()
  })

  test('should accept number values on input change', () => {
    render(<SharpedPhoneInput />)
    const inputElement = screen.getByTestId('phone-input')

    fireEvent.change(inputElement, { target: { value: '1234567890' } })

    expect(inputElement).toHaveValue('(123) 456-7890')
  })

  test('should always format number values to US phone format', () => {
    render(<DefaultPhoneInput />)
    const inputElement = screen.getByTestId('phone-input')

    fireEvent.change(inputElement, { target: { value: '1234567890' } })

    expect(inputElement).not.toHaveValue('1234567890')
  })

  test("shouldn't accept non-number values on input change", () => {
    render(<DefaultPhoneInput />)
    const inputElement = screen.getByTestId('phone-input')

    fireEvent.change(inputElement, { target: { value: 'aaaa' } })

    expect(inputElement).toHaveValue('')
  })

  test('should not allow any value when input is disabled', () => {
    render(<DisabledPhoneInput />)
    const inputElement = screen.getByTestId('phone-input')

    fireEvent.change(inputElement, { target: { value: '1234567890' } })
    expect(inputElement).toHaveValue('')
  })

  test('should show error message', () => {
    render(<PhoneInputWithError />)
    const errorMessage = screen.getByText(/Error Message/i)
    expect(errorMessage).toBeInTheDocument()
  })
})
