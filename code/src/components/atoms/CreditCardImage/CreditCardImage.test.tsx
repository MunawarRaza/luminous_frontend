import { screen, waitFor } from '@testing-library/react'
import CreditCardImage from './CreditCardImage'
import { render } from '@test/utils'

describe('CardIcon Component', () => {
  it('should render component', async () => {
    render(<CreditCardImage cardType="visa" />)

    await waitFor(() => {
      const visaImage = screen.getByTestId('credit-card-image')
      expect(visaImage).toHaveAttribute('alt', 'visa')
    })
  })
})
