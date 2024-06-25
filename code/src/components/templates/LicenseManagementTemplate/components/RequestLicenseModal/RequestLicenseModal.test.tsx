import { fireEvent, screen } from '@testing-library/react'
import RequestLicenseModal from './RequestLicenseModal'
import { render } from '@test/utils'

describe('RequestLicenseModal', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(<RequestLicenseModal />)
    expect(getByTestId('request-license-form')).toBeInTheDocument()
  })

  it('should call onClose when all the values arre correct and the form is submitted', () => {
    const onClose = vi.fn()
    const { getByTestId } = render(<RequestLicenseModal onClose={onClose} />)
    const submitButton = getByTestId('request-license-submit-button')
    const textarea = getByTestId('request-needs-textarea')
    const maxUsersInput = getByTestId('request-max-users-input')
    const maxAuditInput = getByTestId('request-max-audit-input')
    const maxQuestionsInput = getByTestId('request-max-questions-input')
    const maxReportsInput = getByTestId('request-max-reports-input')

    fireEvent.change(textarea, { target: { value: 'I need more licenses' } })
    fireEvent.change(maxUsersInput, { target: { value: 10 } })
    fireEvent.change(maxAuditInput, { target: { value: 10 } })
    fireEvent.change(maxQuestionsInput, { target: { value: 10 } })
    fireEvent.change(maxReportsInput, { target: { value: 10 } })

    fireEvent.click(submitButton)

    screen.debug()

    expect(onClose).toHaveBeenCalled()
  })

  it('should handle input changes', () => {
    const onClose = vi.fn()

    const { getByTestId } = render(<RequestLicenseModal onClose={onClose} />)
    const textarea = getByTestId('request-needs-textarea')

    fireEvent.change(textarea, { target: { value: 'I need more licenses' } })

    expect(textarea).toHaveValue('I need more licenses')
  })
})
