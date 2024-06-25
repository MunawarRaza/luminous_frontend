import { fireEvent, screen, waitFor } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as CreditCardInputStories from './CreditCardInput.stories'
import { render } from '@test/utils'

const { DefaultInput } = composeStories(CreditCardInputStories)

describe('CreditCardInput Component', () => {
  it('should render without crashing', () => {
    render(<DefaultInput label="Card Number" />)
    const input = screen.getByTestId('credit-card-input')

    expect(input).toBeInTheDocument()
  })

  it('should update value when typing', async () => {
    const onValueChange = vi.fn()
    render(<DefaultInput label="Card Number" onValueChange={onValueChange} />)
    const input = screen.getByTestId('credit-card-input')

    fireEvent.change(input, { target: { value: '1234 5678 9012 3456' } })
    expect(onValueChange).toHaveBeenCalledWith('1234 5678 9012 3456')
  })

  it('should not update value when typing non-numeric characters', async () => {
    const onValueChange = vi.fn()
    render(<DefaultInput label="Card Number" onValueChange={onValueChange} />)
    const input = screen.getByTestId('credit-card-input')

    fireEvent.change(input, { target: { value: 'abcd efgh ijkl mnop' } })
    expect(onValueChange).not.toHaveBeenCalled()
  })

  it('should show the visa image icon when typed a valid visa card', async () => {
    const onValueChange = vi.fn()
    render(<DefaultInput label="Card Number" onValueChange={onValueChange} />)
    const input = screen.getByTestId('credit-card-input')

    fireEvent.change(input, { target: { value: '4222 2222 2222 2222' } })
    expect(onValueChange).toHaveBeenCalledWith('4222 2222 2222 2222')

    await waitFor(() => {
      expect(screen.getByAltText('visa')).toBeInTheDocument()
    })
  })

  it('should show the mastercard image icon when typed a valid mastercard card', async () => {
    const onValueChange = vi.fn()
    render(<DefaultInput label="Card Number" onValueChange={onValueChange} />)
    const input = screen.getByTestId('credit-card-input')

    fireEvent.change(input, { target: { value: '5555 5555 5555 4444' } })
    expect(onValueChange).toHaveBeenCalledWith('5555 5555 5555 4444')

    await waitFor(() => {
      expect(screen.getByAltText('mastercard')).toBeInTheDocument()
    })
  })
})
