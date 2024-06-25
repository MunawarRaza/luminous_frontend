import { Title, Text, Space, Group } from '@mantine/core'
import { MfaModalProps, MfaFormValues } from './MfaModalProps.interfaces'
import styles from './MfaModal.module.css'
import Button from '@/components/atoms/Button/Button'
import Logo from '@/components/atoms/Logo/Logo'
import AlertMessage from '@/components/atoms/AlertMessage/AlertMessage'
import { useAppDispatch } from '@/store/hooks/store-hooks'
import { clearAuthError } from '@/store/slices/auth/auth.slice'
import { useForm } from '@mantine/form'
import { verifyMfa } from '@/store/actions/auth.actions'
import { MfaVerifyData } from '@/services/auth/auth.interfaces'
import Cookie from 'js-cookie'
import { useRef } from 'react'

function MfaModal({ isLoading = false, onCancel, onSubmit, session, message }: MfaModalProps) {
  const dispatch = useAppDispatch()
  const ref = useRef<HTMLDivElement>(null)
  const handleCloseError = () => dispatch(clearAuthError())
  const username = Cookie.get('username')

  const form = useForm<MfaFormValues>({
    initialValues: {
      code: Array<string>(6).fill(''),
      focusedIndex: 0
    },
    validateInputOnBlur: true
  })

  function clampIndex(index: number) {
    if (index > 5) {
      return 5
    } else if (index < 0) {
      return 0
    } else {
      return index
    }
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const textValue = e.target?.value
    const newValues = form.values.code
    newValues[form.values.focusedIndex] = textValue
    form.setFieldValue('code', newValues)
    if (textValue !== '') {
      const newIndex = clampIndex(+form.values.focusedIndex + 1)
      form.setFieldValue('focusedIndex', newIndex)
      if (ref.current?.childNodes) {
        const childNodes = ref.current?.childNodes
        const nextInput = childNodes[newIndex] as HTMLInputElement
        nextInput.focus()
        nextInput.select()
      }
    }
  }

  // function handlePaste(pastedValue: string) {
  //   if (pastedValue.length === 6) {
  //     handleSubmit(pastedValue)
  //   }
  // }

  function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
    const target = e.target?.getAttribute('data-testid')
    if (target) {
      const index: number = +target?.slice(-1)
      form.setFieldValue('focusedIndex', clampIndex(index))
    }
  }

  const handleSubmit = form.onSubmit(
    async (values) => {
      const mfaCode: string = values.code.join('')
      if (mfaCode.length < 6) throw new Error('Please enter the complete code')
      if (session && username) {
        const mfaBody: MfaVerifyData = {
          code: mfaCode,
          session,
          username
        }
        const AccessToken = await dispatch(verifyMfa(mfaBody)).unwrap()
        onSubmit?.(AccessToken)
      } else {
        throw new Error('MFA Session not valid or Username not valid')
      }
    },
    async (errors) => {
      console.log(errors)
      onCancel?.()
    }
  )

  return (
    <form onSubmit={handleSubmit} data-testid="mfa-form">
      <div className={styles.Wrapper}>
        <AlertMessage
          title="Error"
          className={styles.ErrorMessage}
          show={!!message}
          variant="error"
          onClose={handleCloseError}
        >
          {message}
        </AlertMessage>
        <div className={styles.HeaderWrapper}>
          <Logo width="200" alt="Luminous" />
        </div>
        <Title className={styles.Title} order={2} ta="center" c="gray" my="lg">
          MFA
        </Title>
        <Text ta="center" size="xs">
          Multi Factor Authentication
        </Text>
        <Space h="lg" />
        <Text ta="center" size="md">
          Enter the code sent to your email
        </Text>
        <div className={styles.InputsWrapper} ref={ref}>
          {form.values.code.map((value: string, index: number) => {
            return (
              <input
                className={styles.MfaInput}
                key={index}
                value={value}
                maxLength={1}
                placeholder="0"
                onChange={handleInput}
                onFocus={handleFocus}
                data-testid={`mfa-input-${index}`}
              />
            )
          })}
        </div>
        <Space h="lg" />
        <Group grow>
          <Button onClick={onCancel} label="Cancel" outlined />
          <Button label="Verify" loading={isLoading} type="submit" data-testid="verify-button" />
        </Group>
      </div>
    </form>
  )
}

export default MfaModal
