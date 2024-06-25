import Card from '@/components/atoms/Card/Card'
import { RegisterFormProps, RegisterFormValues } from './RegisterForm.interfaces'
import styles from './RegisterForm.module.css'
import Logo from '@/components/atoms/Logo/Logo'
import { Grid, Space, Text, Title } from '@mantine/core'
import RegularInput from '@/components/atoms/RegularInput/RegularInput'
import { EnvelopeIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import PhoneInput from '@/components/atoms/PhoneInput/PhoneInput'
import { useState } from 'react'
import GASLogo from '@/assets/images/gas-logo.svg'
import Button from '@/components/atoms/Button/Button'
import { useForm, zodResolver } from '@mantine/form'
import { RegisterValues } from '@/enums/forms/registerValues'
import { RegisterSchema } from './RegisterForm.validations'
import AlertMessage from '@/components/atoms/AlertMessage/AlertMessage'
import { useAppDispatch } from '@/store/hooks/store-hooks'
import { clearAuthError } from '@/store/slices/auth/auth.slice'

const mailIcon = <EnvelopeIcon height={18} width={18} />
const eyeIcon = <EyeIcon height={18} width={18} />
const eyeOffIcon = <EyeSlashIcon height={18} width={18} />

function RegisterForm({ isLoading, onSubmit, onCancel, message }: RegisterFormProps) {
  const dispatch = useAppDispatch()
  const [showPassword, setShowPassword] = useState(false)
  const form = useForm<RegisterFormValues>({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      companyName: '',
      companyAddress: '',
      companyPhoneNumber: '',
      companyEmail: '',
      jobTitle: '',
      password: ''
    },
    validateInputOnBlur: true,
    validate: zodResolver(RegisterSchema)
  })

  const onPhoneChange = (name: RegisterValues, value: string) => form.setFieldValue(name, value)
  const handleSubmit = form.onSubmit((values) => {
    console.log('sent', values)
    onSubmit && onSubmit(values)
  })
  const togglePassword = () => setShowPassword((prev) => !prev)
  const handleCloseError = () => dispatch(clearAuthError())

  return (
    <div className={styles.RegisterWrapper}>
      <Card className={styles.FormCard}>
        <AlertMessage show={!!message} className={styles.AlertMessage} variant="error" onClose={handleCloseError}>
          {message}
        </AlertMessage>
        <Logo alt="Luminous" width="250px" />
        <Title order={2} mt="md">
          Register
        </Title>
        <form className={styles.Form} onSubmit={handleSubmit} noValidate data-testid="register-form">
          <section>
            <header className={styles.SectionHeader}>
              <Text size="md" fw="bold">
                Contact info
              </Text>
              <div className={styles.Line} />
            </header>
            <RegularInput
              data-testid="name-input"
              label="Full Name"
              required
              placeholder="Your full name"
              {...form.getInputProps(RegisterValues.NAME)}
            />
            <Space h="lg" />
            <RegularInput
              type="email"
              label="Email"
              placeholder="user.name@gasinc.us"
              leftSection={mailIcon}
              autoComplete="username"
              data-testid="email-input"
              required
              {...form.getInputProps(RegisterValues.EMAIL)}
            />
            <Space h="lg" />
            <Grid>
              <Grid.Col span={6}>
                <PhoneInput
                  {...form.getInputProps(RegisterValues.PHONE)}
                  label="Phone"
                  required
                  placeholder="(231)"
                  onValueChange={(value) => onPhoneChange(RegisterValues.PHONE, value)}
                  data-testid="phone-input"
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <RegularInput
                  label="Job Title"
                  placeholder="Assistant Manager"
                  data-testid="job-title-input"
                  required
                  {...form.getInputProps(RegisterValues.JOB_TITLE)}
                />
              </Grid.Col>
            </Grid>
            <Space h="lg" />
            <RegularInput
              type={showPassword ? 'text' : 'password'}
              label="Password"
              autoComplete="current-password"
              data-testid="password-input"
              placeholder="Enter a password"
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
              required
              {...form.getInputProps(RegisterValues.PASSWORD)}
            />
          </section>
          <Space h="2xl" />
          <section>
            <header className={styles.SectionHeader}>
              <Text size="md" fw="bold">
                Company info
              </Text>
              <div className={styles.Line} />
            </header>
            <Grid>
              <Grid.Col span={6}>
                <RegularInput
                  data-testid="company-name-input"
                  label="Company name"
                  placeholder="Company name"
                  required
                  {...form.getInputProps(RegisterValues.COMPANY_NAME)}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <RegularInput
                  data-testid="company-email-input"
                  type="email"
                  label="Company email"
                  placeholder="company.name@gasinc.us"
                  leftSection={mailIcon}
                  required
                  {...form.getInputProps(RegisterValues.COMPANY_EMAIL)}
                />
              </Grid.Col>
            </Grid>
            <Space h="lg" />
            <Grid>
              <Grid.Col span={6}>
                <PhoneInput
                  {...form.getInputProps(RegisterValues.COMPANY_PHONE)}
                  data-testid="company-phone-input"
                  label="Company phone"
                  required
                  placeholder="(123)"
                  onValueChange={(value) => onPhoneChange(RegisterValues.COMPANY_PHONE, value)}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <RegularInput
                  label="Company address"
                  data-testid="company-address-input"
                  placeholder="The company legal address"
                  leftSection={mailIcon}
                  required
                  {...form.getInputProps(RegisterValues.COMPANY_ADDRESS)}
                />
              </Grid.Col>
            </Grid>
          </section>
          <Space h="xl" my="xs" />
          <div className={styles.ThirdPartyWrapper}>
            <Text>or register with</Text>
            <div>
              <img src={GASLogo} width={60} height="40%" alt="Great Plains Analytics" />
              <Text>account</Text>
            </div>
          </div>
          <Space h="xl" my="xs" />
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
                label="Register"
                type="submit"
                loading={isLoading}
                data-testid="register-button"
              />
            </Grid.Col>
          </Grid>
        </form>
      </Card>
    </div>
  )
}

export default RegisterForm
