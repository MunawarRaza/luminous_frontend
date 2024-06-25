import { renderWithProviders } from '@test/utils'
import RegisterForm from './RegisterForm'
import { fireEvent, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const mockedUsedNavigate = vi.fn()

vi.mock('react-router-dom', async () => {
  return {
    ...vi.importMock('react-router-dom'),
    useNavigate: () => mockedUsedNavigate
  }
})

describe('RegisterForm Component', () => {
  it('should render component', () => {
    renderWithProviders(<RegisterForm />)
    const Form = screen.getByTestId('register-form')
    expect(Form).toBeInTheDocument()
  })

  it("should return to login screen when click on 'Cancel' button", () => {
    renderWithProviders(<RegisterForm onCancel={mockedUsedNavigate} />)
    const cancelButton = screen.getByTestId('cancel-register-button')

    fireEvent.click(cancelButton)

    expect(mockedUsedNavigate).toHaveBeenCalled()
  })

  it('should not calls onSubmit function with empty form', async () => {
    const onSubmit = vi.fn()
    renderWithProviders(<RegisterForm onSubmit={onSubmit} />)

    const submitButton = screen.getByTestId('register-button')
    fireEvent.click(submitButton)

    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('should show error message for invalid email', async () => {
    const user = userEvent.setup()
    renderWithProviders(<RegisterForm />)

    const email = screen.getByTestId('email-input')

    await user.type(email, 'example')
    await user.tab()
    const emailErrorText = screen.getByText(/Invalid email/i)

    expect(emailErrorText).toBeInTheDocument()
  })

  it('should show error message for invalid phone', async () => {
    const user = userEvent.setup()
    renderWithProviders(<RegisterForm />)

    const phone = screen.getByTestId('phone-input')

    await user.type(phone, '123')
    await user.tab()
    const phoneErrorText = screen.getByText(/Invalid phone/i)

    expect(phoneErrorText).toBeInTheDocument()
  })

  it('should show error message for invalid password', async () => {
    const user = userEvent.setup()
    renderWithProviders(<RegisterForm />)

    const password = screen.getByTestId('password-input')

    await user.type(password, '123')
    await user.tab()
    const passwordErrorText = screen.getByText(/Password must be/i)

    expect(passwordErrorText).toBeInTheDocument()
  })

  it('should validate that password must be in correct format (one uppercase, one lowercase, one number and one special character), even if 8 characters are passed', async () => {
    const user = userEvent.setup()
    renderWithProviders(<RegisterForm />)

    const password = screen.getByTestId('password-input')

    await user.type(password, 'abc12321')
    await user.tab()
    const passwordErrorText = screen.getByText(/Password must contain at least one uppercase letter/i)

    expect(passwordErrorText).toBeInTheDocument()
  })

  it("should toggle password input type when click on 'Show password' button", async () => {
    const user = userEvent.setup()
    renderWithProviders(<RegisterForm />)

    const password = screen.getByPlaceholderText(/Password/i)
    const showPasswordButton = screen.getByTestId('toggle-password')

    await user.type(password, 'Abc1234!')
    await user.tab()
    fireEvent.click(showPasswordButton)

    expect(password).toHaveAttribute('type', 'text')
  })

  it("should show error for company email when it's not a valid email", async () => {
    const user = userEvent.setup()
    renderWithProviders(<RegisterForm />)

    const companyEmail = screen.getByTestId('company-email-input')

    await user.type(companyEmail, 'example')
    await user.tab()
    const companyEmailErrorText = screen.getByText(/Invalid email/i)

    expect(companyEmailErrorText).toBeInTheDocument()
  })

  it('should show error for company address when address field is empty', async () => {
    const user = userEvent.setup()
    renderWithProviders(<RegisterForm />)

    const companyAddress = screen.getByTestId('company-address-input')

    await user.type(companyAddress, 'sd')
    await user.tab()
    const companyAddressErrorText = screen.getByText(/Required/i)

    expect(companyAddressErrorText).toBeInTheDocument()
  })

  it('Should submit form when all inputs are filled correctly', async () => {
    const onSubmit = vi.fn()
    const user = userEvent.setup()
    renderWithProviders(<RegisterForm onSubmit={onSubmit} />)

    const fullName = screen.getByTestId('name-input')
    const email = screen.getByTestId('email-input')
    const phone = screen.getByTestId('phone-input')
    const jobTitle = screen.getByTestId('job-title-input')
    const password = screen.getByTestId('password-input')
    const companyEmail = screen.getByTestId('company-email-input')
    const companyName = screen.getByTestId('company-name-input')
    const companyPhone = screen.getByTestId('company-phone-input')
    const companyAddress = screen.getByTestId('company-address-input')

    const submitButton = screen.getByTestId('register-button')

    await user.type(fullName, 'John Doe')
    await user.type(email, 'user@email.com')
    await user.type(phone, '1234567890')
    await user.type(jobTitle, 'Assistant Manager')
    await user.type(password, 'Test123!')
    await user.type(companyEmail, 'company@email.com')
    await user.type(companyName, 'Company Name')
    await user.type(companyPhone, '1234567890')
    await user.type(companyAddress, 'Company Address')

    fireEvent.click(submitButton)

    expect(onSubmit).toHaveBeenCalled()
  })

  it('Should not submit form when all inputs are filled correctly but company name is empty', async () => {
    it('Should submit form when all inputs are filled correctly', async () => {
      const onSubmit = vi.fn()
      const user = userEvent.setup()
      renderWithProviders(<RegisterForm onSubmit={onSubmit} />)

      const fullName = screen.getByTestId('name-input')
      const email = screen.getByTestId('email-input')
      const phone = screen.getByTestId('phone-input')
      const jobTitle = screen.getByTestId('job-title-input')
      const password = screen.getByTestId('password-input')
      const companyEmail = screen.getByTestId('company-email-input')
      const companyPhone = screen.getByTestId('company-phone-input')
      const companyAddress = screen.getByTestId('company-address-input')
      const submitButton = screen.getByTestId('register-button')

      await user.type(fullName, 'John Doe')
      await user.type(email, 'user@email.com')
      await user.type(phone, '1234567890')
      await user.type(jobTitle, 'Assistant Manager')
      await user.type(password, 'Test123!')
      await user.type(companyEmail, 'company@email.com')
      await user.type(companyPhone, '1234567890')
      await user.type(companyAddress, 'Company Address')

      fireEvent.click(submitButton)

      expect(onSubmit).not.toHaveBeenCalled()
    }, 10000)
  })

  it('should shows message', async () => {
    renderWithProviders(<RegisterForm message="Error" />)
    const alertComponent = screen.getByTestId('alert-message')

    expect(alertComponent).toBeInTheDocument()
  })

  it("should close error message when clicking on 'x' button", async () => {
    const onSubmit = vi.fn()
    renderWithProviders(<RegisterForm onSubmit={onSubmit} message="Error" />)

    const alertComponent = screen.getByTestId('alert-message')
    const closeButton = alertComponent.querySelector('button')

    expect(alertComponent).toBeInTheDocument()

    closeButton && fireEvent.click(closeButton)

    await waitFor(() => expect(alertComponent).not.toBeInTheDocument())
  })
})
