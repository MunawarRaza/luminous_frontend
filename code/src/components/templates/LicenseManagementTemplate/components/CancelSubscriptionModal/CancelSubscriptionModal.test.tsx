import { fireEvent } from '@testing-library/react'
import CancelSubscriptionModal from './CancelSubscriptionModal'
import { render } from '@test/utils'

describe('CancelSubscriptionModal', () => {
  it('should render without crashing', () => {
    const onClose = vi.fn()

    const { getByTestId } = render(<CancelSubscriptionModal onClose={onClose} />)
    expect(getByTestId('cancel-subscription-form')).toBeInTheDocument()
  })

  it('should handle input changes', () => {
    const onClose = vi.fn()

    const { getByTestId } = render(<CancelSubscriptionModal onClose={onClose} />)
    const textarea = getByTestId('cancel-reason-textarea')

    fireEvent.change(textarea, { target: { value: 'I want to cancel my subscription' } })

    expect(textarea).toHaveValue('I want to cancel my subscription')
  })

  it('should call onClose when the form is submitted', () => {
    const onClose = vi.fn()
    const { getByTestId } = render(<CancelSubscriptionModal onClose={onClose} />)
    const submitButton = getByTestId('cancel-subscription-submit-button')
    const textarea = getByTestId('cancel-reason-textarea')

    fireEvent.change(textarea, { target: { value: 'I need more licenses' } })

    fireEvent.click(submitButton)

    expect(onClose).toHaveBeenCalled()
  })
})
