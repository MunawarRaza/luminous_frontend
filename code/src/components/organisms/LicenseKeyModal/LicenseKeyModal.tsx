import { LicenseKeyFormValues, LicenseKeyModalProps } from './LicenseKeyModal.interfaces'
import { useForm } from '@mantine/form'
import { Text } from '@mantine/core'
import RegularInput from '@/components/atoms/RegularInput/RegularInput'
import Button from '@/components/atoms/Button/Button'
import Table from '@/components/atoms/Table/Table'

function LicenseKeyModal({ onClose, onLicenseApply, isApplied }: LicenseKeyModalProps) {
  const form = useForm<LicenseKeyFormValues>({
    initialValues: {
      licenseKey: ''
    }
  })

  const handleSubmit = form.onSubmit((values) => {
    onLicenseApply(values.licenseKey)
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value.replace(/-/g, '')
    const onlyDigits = rawValue.replace(/\D/g, '')
    const formattedValue = onlyDigits.replace(/(\d{4})(?=\d)/g, '$1-')

    form.setFieldValue('licenseKey', formattedValue)
  }

  return (
    <>
      {!isApplied && (
        <form onSubmit={handleSubmit} data-testid="licensekey-form">
          <Text fw={700} mb="xl">
            Please enter below the License Key you received from our email
          </Text>
          <RegularInput
            label="License Key"
            required
            placeholder="0000-0000-0000-0000-0000-0000-0000-0000"
            maxLength={39}
            value={form.values.licenseKey}
            onChange={handleInputChange}
            data-testid="licensekey-input"
          />
          <Button label="Apply" mt="xl" fullWidth type="submit" data-testid="licensekey-submit-button" />
        </form>
      )}
      {isApplied && (
        <>
          <Text fw={700} my="xl">
            The following plan has been credited to your account
          </Text>
          <Table
            columns={[
              { title: 'Plan Details', key: 'details' },
              { title: 'Value', key: 'value' }
            ]}
            rows={[
              { key: '1', values: ['Plan Name', 'Enterprise'] },
              { key: '2', values: ['Plan Expires', 'Never'] }
            ]}
            data-testid="license-details-table"
          />
          <Button label="Refresh" mt="xl" fullWidth onClick={onClose} data-testid="license-refresh-button" />
        </>
      )}
    </>
  )
}

export default LicenseKeyModal
