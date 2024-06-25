import { Anchor, Title, Text, Space } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { LoginFormProps, FormValues, LoginSchema } from './LoginForm.interfaces'
import { EyeIcon, EnvelopeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import styles from './LoginForm.module.css'
import Card from '@/components/atoms/Card/Card'
import RegularInput from '@/components/atoms/RegularInput/RegularInput'
import Button from '@/components/atoms/Button/Button'
import Logo from '@/components/atoms/Logo/Logo'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import AlertMessage from '@/components/atoms/AlertMessage/AlertMessage'
import { useAppDispatch } from '@/store/hooks/store-hooks'
import { clearAuthError, clearAuthMessage } from '@/store/slices/auth/auth.slice'

const eyeIcon = <EyeIcon height={18} width={18} />
const eyeOffIcon = <EyeSlashIcon height={18} width={18} />
const mailIcon = <EnvelopeIcon height={18} width={18} />

function LoginForm({ isLoading = false, onSubmit, onForgotPassword, message, authMessage }: LoginFormProps) {
  const dispatch = useAppDispatch()
  const [showPassword, setShowPassword] = useState(false)
  const form = useForm<FormValues>({
    validate: zodResolver(LoginSchema),
    validateInputOnBlur: true,
    initialValues: { username: '', password: '' }
  })

  const handleSubmit = form.onSubmit((values) => onSubmit(values))
  const handleForgotPassword = () => {
    const { hasError } = form.validateField('username')

    if (!hasError) onForgotPassword(form.values)
  }
  const togglePassword = () => setShowPassword((prev) => !prev)
  const handleCloseError = () => dispatch(clearAuthError())
  const handleCloseAuthMessage = () => dispatch(clearAuthMessage())

  return (
    <div className={styles.Wrapper}>
      <Card className={styles.FormCard}>
        <AlertMessage
          title="Error"
          className={styles.ErrorMessage}
          show={!!message}
          variant="error"
          onClose={handleCloseError}
        >
          {message}
        </AlertMessage>
        <AlertMessage
          title="Success"
          className={styles.ErrorMessage}
          show={!!authMessage}
          variant="success"
          onClose={handleCloseAuthMessage}
        >
          {message}
        </AlertMessage>
        <div className={styles.HeaderWrapper}>
          <Title order={1}>Welcome to</Title>
          <Logo width="200" alt="Luminous" />
        </div>
        <Title order={2} ta="center" c="gray" my="lg">
          Log in
        </Title>
        <form onSubmit={handleSubmit} className={styles.LoginForm} noValidate data-testid="login-form">
          <RegularInput
            label="Email"
            placeholder="user@gasinc.us"
            autoComplete="username"
            leftSection={mailIcon}
            {...form.getInputProps('username')}
            data-testid="email-input"
          />
          <Space h="lg" />
          <RegularInput
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            label="Password"
            placeholder="********"
            data-testid="password-input"
            rightSection={
              <button
                data-testid="toggle-password"
                className={styles.ToggleButton}
                onClick={togglePassword}
                type="button"
              >
                {!showPassword ? eyeIcon : eyeOffIcon}
              </button>
            }
            {...form.getInputProps('password')}
          />
          <Space h="lg" />
          <Button type="submit" size="md" label="Login" fullWidth loading={isLoading} data-testid="login-button" />
          <Space h="xl" />
          <Anchor href="#" underline="always" onClick={() => handleForgotPassword()}>
            <Text ta="end" c="primary.7">
              Forgot password?
            </Text>
          </Anchor>
          <Space h="xl" />
          <Text className={styles.SignUpText}>
            Don&lsquo;t have an acccount?
            <Link to="/register">
              <span>Sign up</span>
            </Link>
          </Text>
        </form>
      </Card>
    </div>
  )
}

export default LoginForm
