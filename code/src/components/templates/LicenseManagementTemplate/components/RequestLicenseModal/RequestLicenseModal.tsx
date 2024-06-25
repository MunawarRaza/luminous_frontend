import { Text } from '@mantine/core'
import styles from './RequestLicenseModal.module.css'
import RegularInput from '@/components/atoms/RegularInput/RegularInput'
import TextareaInput from '@/components/atoms/TextareaInput/TextareaInput'
import Button from '@/components/atoms/Button/Button'
import { useForm, zodResolver } from '@mantine/form'
import {
  RequestLicenseFormValues,
  RequestLicenseModalProps,
  RequestLicenseSchema
} from './RequestLicenseModal.intefaces'
import { REQUEST_LICENSE_FORM_VALUES } from './RequestLicenseModal.enums'

function RequestLicenseModal({ onClose }: RequestLicenseModalProps) {
  const { getInputProps, onSubmit } = useForm<RequestLicenseFormValues>({
    initialValues: {
      maxUsers: '',
      maxAudit: '',
      maxQuestions: '',
      maxReports: '',
      needs: ''
    },
    validate: zodResolver(RequestLicenseSchema)
  })

  const handleSubmit = onSubmit((values) => {
    console.log(values)
    onClose?.()
  })

  return (
    <form className={styles.RequestForm} data-testid="request-license-form" onClick={handleSubmit}>
      <Text fw={700} size="sm" mt="md">
        Please input your updated needs in the form below, if there are any different changes you require, please
        explain within the text form.
      </Text>
      <div className={styles.FormsWrapper}>
        <RegularInput
          type="number"
          label="Maximum Users in the Server"
          placeholder="10"
          data-testid="request-max-users-input"
          {...getInputProps(REQUEST_LICENSE_FORM_VALUES.MAX_USERS)}
        />
        <RegularInput
          type="number"
          label="Maximum Audit Reviews a Day"
          placeholder="10"
          data-testid="request-max-audit-input"
          {...getInputProps(REQUEST_LICENSE_FORM_VALUES.MAX_AUDIT)}
        />
      </div>
      <div className={styles.FormsWrapper}>
        <RegularInput
          type="number"
          label="Maximum AI Questions per Day"
          placeholder="10"
          data-testid="request-max-questions-input"
          {...getInputProps(REQUEST_LICENSE_FORM_VALUES.MAX_QUESTIONS)}
        />
        <RegularInput
          type="number"
          label="Maximum Reports Exports per Day"
          placeholder="10"
          data-testid="request-max-reports-input"
          {...getInputProps(REQUEST_LICENSE_FORM_VALUES.MAX_REPORTS)}
        />
      </div>
      <TextareaInput
        label="Explain your needs"
        placeholder="Write down as many details regarding your chosen payment method"
        mt="md"
        data-testid="request-needs-textarea"
        {...getInputProps(REQUEST_LICENSE_FORM_VALUES.NEEDS)}
      />
      <Text fw={700} ta="center" mt="xl">
        You shall receive an answer through your registered email regarding your request. We will be in touch as soon as
        possible to successfully update your plan
      </Text>
      <Button mt="xl" label="Send" fullWidth data-testid="request-license-submit-button" type="submit" />
    </form>
  )
}

export default RequestLicenseModal
