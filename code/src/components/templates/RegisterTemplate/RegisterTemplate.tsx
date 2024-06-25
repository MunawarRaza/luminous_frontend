import RegisterForm from '@/components/organisms/RegisterForm/RegisterForm'
import { Container } from '@mantine/core'
import styles from './RegisterTemplate.module.css'
import { useAppDispatch, useAppSelector } from '@/store/hooks/store-hooks'
import { RegisterFormValues } from '@/components/organisms/RegisterForm/RegisterForm.interfaces'
import { registerUser } from '@/store/actions/auth.actions'
import { RegisterData } from '@/services/auth/auth.interfaces'
import { NAV_LINKS } from '@/enums/navLinks'
import { useNavigate } from 'react-router-dom'

function RegisterTemplate() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const isSigningUp = useAppSelector((state) => state.authLoader.isSigningUp)
  const errorMessage = useAppSelector((state) => state.auth.authError)

  const handleCancel = () => navigate(-1)
  const handleSubmit = async (values: RegisterFormValues) => {
    const registerValues: RegisterData = {
      ...values,
      organization: {
        organization_name: values.companyName,
        address: values.companyAddress,
        phone: values.companyPhoneNumber,
        email: values.companyEmail
      }
    }

    try {
      await dispatch(registerUser(registerValues)).unwrap()
      return navigate(NAV_LINKS.DASHBOARD)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className={styles.Wrapper}>
      <Container size="xl" className={styles.Container}>
        <RegisterForm isLoading={isSigningUp} onSubmit={handleSubmit} onCancel={handleCancel} message={errorMessage} />
      </Container>
    </main>
  )
}

export default RegisterTemplate
