import Button from '@/components/atoms/Button/Button'
import TextareaInput from '@/components/atoms/TextareaInput/TextareaInput'
import { Text } from '@mantine/core'
import styles from './CancelSubscriptionModal.module.css'
import { useForm, zodResolver } from '@mantine/form'
import { CancelSubscriptionFormValues, CancelSubscriptionSchema } from './CancelSubscriptionModal.interfaces'
import { RequestLicenseModalProps } from '../RequestLicenseModal/RequestLicenseModal.intefaces'

function CancelSubscriptionModal({ onClose }: RequestLicenseModalProps) {
  const { getInputProps, isValid, onSubmit } = useForm<CancelSubscriptionFormValues>({
    initialValues: {
      reason: ''
    },
    validate: zodResolver(CancelSubscriptionSchema)
  })

  const handleSubmit = onSubmit((values) => {
    console.log(values)
    onClose?.()
  })

  return (
    <form onSubmit={handleSubmit} className={styles.CancelForm} data-testid="cancel-subscription-form">
      <Text fw={700} mb="md" size="sm">
        We are sorry to see you go! Please fill in the form below so we can reach out to formalize your cancelation and
        understand how we can do better
      </Text>
      <TextareaInput
        {...getInputProps('reason')}
        placeholder="Write down the reasons that made you want to cancel your subscription to Luminous."
        data-testid="cancel-reason-textarea"
      />
      <Text fw={700} mt="xl" ta="center">
        You shall receive an answer through your registered email regarding your request. We will be in touch as soon as
        possible to successfully cancel your plan
      </Text>
      <Button
        label="Send"
        fullWidth
        mt="xl"
        type="submit"
        disabled={!isValid}
        data-testid="cancel-subscription-submit-button"
      />
    </form>
  )
}

export default CancelSubscriptionModal
