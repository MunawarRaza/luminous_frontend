import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Grid, Space, Text, Title } from '@mantine/core'
import Logo from '@/components/atoms/Logo/Logo.tsx'
import Card from '@/components/atoms/Card/Card.tsx'
import styles from './ResetPasswordForm.module.css'
import { useForm, zodResolver } from '@mantine/form'
import Button from '@/components/atoms/Button/Button.tsx'
import { useAppDispatch } from '@/store/hooks/store-hooks.ts'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { clearAuthError } from '@/store/slices/auth/auth.slice.ts'
import RegularInput from '@/components/atoms/RegularInput/RegularInput.tsx'
import AlertMessage from '@/components/atoms/AlertMessage/AlertMessage.tsx'
import { ResetPasswordFormValues, ResetPasswordProps } from './ResetPasswordForm.interfaces.ts'
import { ResetPasswordFormSchema } from '@/components/organisms/ResetPassword/ResetPasswordFormSchema.ts'

const eyeIcon = <EyeIcon height={18} width={18} />
const eyeOffIcon = <EyeSlashIcon height={18} width={18} />

function ResetPassword({ isLoading, onSubmit, onCancel, message }: ResetPasswordProps) {
  const dispatch = useAppDispatch()
  const location = useLocation()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const searchParams = new URLSearchParams(location.search)
  const form = useForm<ResetPasswordFormValues>({
    initialValues: {
      username: searchParams.get('email') ?? '',
      password: '',
      confirmPassword: '',
      code: searchParams.get('code') ?? ''
    },
    validateInputOnBlur: true,
    validateInputOnChange: true,
    validate: zodResolver(ResetPasswordFormSchema)
  })

  const handleSubmit = form.onSubmit((values) => onSubmit(values))
  const togglePassword = () => setShowPassword((prev) => !prev)
  const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev)
  const handleCloseError = () => dispatch(clearAuthError())

  return (
    <div className={styles.RegisterWrapper}>
      <Card className={styles.FormCard}>
        <AlertMessage show={!!message} className={styles.AlertMessage} variant="error" onClose={handleCloseError}>
          {message}
        </AlertMessage>
        <Logo alt="Luminous" width="250px" />
        <Title order={2} mt="md">
          New Password
        </Title>
        <form className={styles.Form} onSubmit={handleSubmit} noValidate data-testid="forgot-password-form">
          <section>
            <header className={styles.SectionHeader}>
              <Text size="md" fw="bold">
                New Password
              </Text>
              <div className={styles.Line} />
            </header>
            <RegularInput
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              label="New Password"
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
            <RegularInput
              type={showConfirmPassword ? 'text' : 'password'}
              autoComplete="confirm-current-password"
              label="Confirm Password"
              placeholder="********"
              data-testid="confirm-password-input"
              rightSection={
                <button
                  data-testid="toggle-password"
                  className={styles.ToggleButton}
                  onClick={toggleConfirmPassword}
                  type="button"
                >
                  {!showConfirmPassword ? eyeIcon : eyeOffIcon}
                </button>
              }
              {...form.getInputProps('confirmPassword')}
            />
            <Space h="lg" />
            <Space h="lg" />
            <Grid>
              <Grid.Col span={6}>
                <Button
                  outlined
                  onClick={onCancel}
                  fullWidth
                  size="md"
                  label="Cancel"
                  type="button"
                  data-testid="cancel-register-button"
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Button
                  fullWidth
                  size="md"
                  label="Update Password"
                  type="submit"
                  loading={isLoading}
                  data-testid="register-button"
                />
              </Grid.Col>
            </Grid>
          </section>
        </form>
      </Card>
    </div>
  )
}

export default ResetPassword
