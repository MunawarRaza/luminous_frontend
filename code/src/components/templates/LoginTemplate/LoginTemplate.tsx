import LoginForm from '@/components/organisms/LoginForm/LoginForm'
import styles from './LoginTemplate.module.css'
import { Container } from '@mantine/core'
import { useAppDispatch, useAppSelector } from '@/store/hooks/store-hooks'
import { LoginData } from '@/services/auth/auth.interfaces'
import { forgetPassword, loginUser } from '@/store/actions/auth.actions'
import { useLocation, useNavigate } from 'react-router-dom'
import { NAV_LINKS } from '@/enums/navLinks'
import Modal from '@/components/atoms/Modal/Modal'
import MfaModal from '@/components/organisms/MfaModal/MfaModal'
import { useState } from 'react'
import { LoginModalTypes } from './LoginTemplate.interfaces'
import Cookie from 'js-cookie'
import { SESSION_TOKENS } from '@/constants/SESSION_TOKENS'

const LoginTemplate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [authSession, setAuthSession] = useState('')
  const [modalType, setModalType] = useState<LoginModalTypes>(null)
  const navigate = useNavigate()
  const { isSigningIn } = useAppSelector((state) => state.authLoader)
  const { authError, authMessage } = useAppSelector((state) => state.auth)
  const location = useLocation()
  const dispatch = useAppDispatch()
  const from = location.state?.from || { pathname: NAV_LINKS.DASHBOARD }
  const modalLabel = modalType === 'mfa' ? '' : 'Password Recovery'
  const modalTestId = modalType === 'mfa' ? 'multifactor-auth-modal' : 'forgot-password-modal'

  const handleSubmit = async (credentials: LoginData) => {
    try {
      const login = await dispatch(loginUser(credentials)).unwrap()
      if (login) {
        if (Cookie.get(SESSION_TOKENS.REFRESH)) {
          return navigate(from, { replace: true })
        } else {
          setAuthSession(login)
          setModalType('mfa')
          setIsModalOpen(true)
        }
      } else {
        console.log('Something went wrong with the Login Request')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setModalType(null)
  }

  const handleMfaSubmit = (AccessToken?: string) => {
    setIsModalOpen(false)
    setModalType(null)
    if (AccessToken) {
      return navigate(from, { replace: true })
    }
  }

  const handleForgotPasswordSubmit = async (credentials: LoginData) => {
    try {
      await dispatch(forgetPassword(credentials)).unwrap()
      // return navigate(from, { replace: true })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className={styles.Wrapper}>
      <Container size="xl" className={styles.Container}>
        <LoginForm
          onSubmit={handleSubmit}
          onForgotPassword={handleForgotPasswordSubmit}
          authMessage={authMessage}
          message={authError}
          isLoading={isSigningIn}
        />
      </Container>
      <Modal
        className={styles.Modal}
        isOpen={isModalOpen}
        title={modalLabel}
        onClose={handleCloseModal}
        data-testid={modalTestId}
      >
        {modalType === 'mfa' && (
          <MfaModal onCancel={handleCloseModal} onSubmit={handleMfaSubmit} session={authSession} message={authError} />
        )}
      </Modal>
    </main>
  )
}

export default LoginTemplate
