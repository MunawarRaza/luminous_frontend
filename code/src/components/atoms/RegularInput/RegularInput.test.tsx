import { composeStories } from '@storybook/react'
import * as RegularInputStories from './RegularInput.stories'
import { fireEvent, screen } from '@testing-library/react'
import { render } from '@test/utils'

const { DefaultInput, DisabledInput } = composeStories(RegularInputStories)

describe('Regular input', () => {
  test('should render correctly', () => {
    render(<DefaultInput placeholder="Test input" />)
    const input = screen.getByTestId('regular-input')
    expect(input).toBeInTheDocument()
  })

  test('should allow to change value', () => {
    render(<DefaultInput placeholder="Test input" />)
    const input = screen.getByTestId('regular-input')

    fireEvent.change(input, { target: { value: 'test' } })
    expect(input).toHaveValue('test')
  })

  test("should not allow to change value when it's disabled", () => {
    render(<DisabledInput placeholder="Test input" />)
    const input = screen.getByTestId('regular-input')

    fireEvent.change(input, { target: { value: 'test' } })
    expect(input).toHaveValue('')
  })

  test('should renders error message', () => {
    render(<DefaultInput placeholder="Test input" error="Error message" />)
    const error = screen.getByText(/error message/i)
    expect(error).toBeInTheDocument()
  })

  test('should renders helper text', () => {
    render(<DefaultInput placeholder="Test input" helperText="Helper text" />)
    const helperText = screen.getByText(/helper text/i)
    expect(helperText).toBeInTheDocument()
  })

  test('should not render error when is not provided', () => {
    render(<DefaultInput placeholder="Test input" />)
    const error = screen.queryByText(/error message/i)
    expect(error).not.toBeInTheDocument()
  })
})
