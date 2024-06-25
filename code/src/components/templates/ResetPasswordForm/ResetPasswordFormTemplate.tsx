import { Container } from '@mantine/core'
import { NAV_LINKS } from '@/enums/navLinks.ts'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './ResetPasswordFormTemplate.module.css'
import { resetPassword } from '@/store/actions/auth.actions.ts'
import { useAppDispatch, useAppSelector } from '@/store/hooks/store-hooks.ts'
import ForgotPasswordForm from '@/components/organisms/ResetPassword/ResetPasswordForm.tsx'
import { ResetPasswordRequestInterface } from '@/services/auth/resetPassword/resetPassword.interface.ts'
import { useEffect } from 'react'

const ResetPasswordFormTemplate = () => {
  const dispatch = useAppDispatch()
  const { state, search } = useLocation()
  const navigate = useNavigate()
  const from = state?.from || { pathname: NAV_LINKS.LOGIN }
  const { isSigningIn } = useAppSelector((state) => state.authLoader)
  const { authError } = useAppSelector((state) => state.auth)

  const handleCancel = () => navigate(from, { replace: true })

  useEffect(() => {
    const searchParams = new URLSearchParams(search)

    if (!searchParams.has('code') || !searchParams.has('email')) {
      console.log('Nav')
      navigate(NAV_LINKS.LOGIN, { replace: true })
    }
  }, [navigate, search])

  const handleSubmit = async (resetRequest: ResetPasswordRequestInterface) => {
    try {
      await dispatch(resetPassword(resetRequest)).unwrap()
      return navigate(from, { replace: true })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className={styles.Wrapper}>
      <Container size="xl" className={styles.Container}>
        <ForgotPasswordForm
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          message={authError}
          isLoading={isSigningIn}
        />
      </Container>
    </main>
  )
}

export default ResetPasswordFormTemplate
