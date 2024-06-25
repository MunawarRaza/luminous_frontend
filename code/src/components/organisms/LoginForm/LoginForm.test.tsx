import { fireEvent, screen, waitFor } from '@testing-library/react'
import { renderWithProviders } from '@test/utils'
import * as LoginFormStories from './LoginForm.stories'
import { composeStories } from '@storybook/react'
import userEvent from '@testing-library/user-event'

const { DefaultForm, FormWithError } = composeStories(LoginFormStories)

describe('LoginForm Component', () => {
  it('should render component', () => {
    renderWithProviders(<DefaultForm />)

    const loginForm = screen.getByTestId('login-form')
    expect(loginForm).toBeInTheDocument()
  })

  it('should not calls onSubmit function with empty form', async () => {
    const onSubmit = vi.fn()
    renderWithProviders(<DefaultForm onSubmit={onSubmit} />)

    const submitButton = screen.getByTestId('login-button')
    fireEvent.click(submitButton)

    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('should not calls onSubmit function if email is not valid', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()
    renderWithProviders(<DefaultForm onSubmit={onSubmit} />)

    const email = screen.getByTestId('email-input')
    const password = screen.getByTestId('password-input')

    await user.type(email, 'example')
    await user.type(password, '123456')

    const submitButton = screen.getByTestId('login-button')
    fireEvent.click(submitButton)

    expect(onSubmit).not.toHaveBeenCalled()
  })

  it("should toggle password's input visibility when clicking show password button", async () => {
    const user = userEvent.setup()
    renderWithProviders(<DefaultForm />)

    const password = screen.getByTestId('password-input')
    await user.type(password, '123456')

    const toggleButton = screen.getByTestId('toggle-password')
    fireEvent.click(toggleButton)

    expect(password).toHaveValue('123456')
  })

  it('should not calls onSubmit function if password is not informed', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()
    renderWithProviders(<DefaultForm onSubmit={onSubmit} />)

    const email = screen.getByTestId('email-input')
    await user.type(email, 'example@gasinc.us')

    const submitButton = screen.getByTestId('login-button')
    fireEvent.click(submitButton)

    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('should calls onSubmit function on submit', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()
    renderWithProviders(<DefaultForm onSubmit={onSubmit} />)

    const email = screen.getByTestId('email-input')
    const password = screen.getByTestId('password-input')

    await user.type(email, 'example@gasinc.us')
    await user.type(password, '123456')

    const submitButton = screen.getByTestId('login-button')

    fireEvent.click(submitButton)

    expect(onSubmit).toHaveBeenCalledOnce()
    expect(onSubmit).toHaveBeenCalledWith({
      username: 'example@gasinc.us',
      password: '123456'
    })
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
