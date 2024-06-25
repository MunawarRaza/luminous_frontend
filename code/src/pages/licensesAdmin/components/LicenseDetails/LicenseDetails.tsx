import { Group, NumberInput } from '@mantine/core'
import FormLegend from '@/components/atoms/FormLegend/FormLegend'
import { LicenseDetailsProps } from './LicenseDetails.interface'
import RegularInput from '@/components/atoms/RegularInput/RegularInput'
import Button from '@/components/atoms/Button/Button'
import styles from './LicenseDetails.module.css'
import { useForm, zodResolver } from '@mantine/form'
import { LICENSE_VALUES } from '../../contracts/licenseValues'
import { useAppSelector } from '@/store/hooks/store-hooks'
import { LicenseDetailsSchema } from './LicenseDetails.validations'
import DatePicker from '@/components/atoms/DatePicker/DatePicker'

function LicenseDetails({ license, onCancel, editMode = true, generateMode = false }: LicenseDetailsProps) {
  const isLoading = useAppSelector((state) => state.usersLoaders.isUpdatingUser)

  const { onSubmit, getInputProps } = useForm({
    initialValues: {
      organization_name: license?.organization_name ?? '',
      email: license?.email ?? '',
      max_users: license?.max_users ?? '',
      max_audits: license?.max_audits ?? '',
      max_questions: license?.max_questions ?? '',
      activated_date: license?.activated_date ?? '',
      expiration_date: license?.expiration_date ?? '',
      license_key: license?.license_key ?? ''
    },
    validateInputOnBlur: true,
    validate: zodResolver(LicenseDetailsSchema)
  })

  // creates the props for the Expiration Date as a Date Value
  const dateProps = getInputProps(LICENSE_VALUES.EXPIRATION_DATE)
  dateProps.value = dateProps.value ? new Date(dateProps.value) : ''

  const handleSubmit = onSubmit(
    async (values) => {
      const licensevalues = {
        ...values
      }
      if (generateMode) {
        console.log('Generated License Key with the Following Values:')
        console.log(licensevalues)
      } else {
        console.log('Updated License Key with the Following Values:')
        console.log(licensevalues)
        console.log(getInputProps(LICENSE_VALUES.EXPIRATION_DATE))
        console.log(getInputProps(LICENSE_VALUES.EXPIRATION_DATE).value.toISOString())
      }
      onCancel?.()
    },
    async (errors) => {
      console.log(errors)
    }
  )

  const onSend = () => {
    console.log('Email sent!')
  }

  return (
    <form className={styles.DetailsForm} onSubmit={handleSubmit}>
      <FormLegend title="License Info" />
      <Group grow mt="xl">
        <RegularInput
          label="Institution Name"
          disabled={!editMode}
          {...getInputProps(LICENSE_VALUES.ORGANIZATION_NAME)}
        />
        <RegularInput
          label="Contact Email"
          type="email"
          disabled={!editMode}
          {...getInputProps(LICENSE_VALUES.EMAIL)}
        />
      </Group>
      <Group grow mt="lg">
        <NumberInput
          label="Maximum # of Users"
          type="text"
          disabled={!editMode}
          {...getInputProps(LICENSE_VALUES.MAX_USERS)}
        />
        <NumberInput
          label="Maximum Report Audits per Day"
          type="text"
          disabled={!editMode}
          {...getInputProps(LICENSE_VALUES.MAX_AUDITS)}
        />
      </Group>
      <Group grow mt="lg">
        <NumberInput
          label="Maximum AI Questions per Day"
          type="text"
          disabled={!editMode}
          {...getInputProps(LICENSE_VALUES.MAX_QUESTIONS)}
        />
        <DatePicker label="Expiration Date" disabled={!editMode} placeholder="05/05/2024" {...dateProps}></DatePicker>
      </Group>
      <Group grow mt="lg">
        <RegularInput label="License Key" disabled={true} {...getInputProps(LICENSE_VALUES.LICENSE_KEY)} />
      </Group>
      {generateMode && (
        <div className={styles.ActionGroup}>
          <Button className={styles.ActionButton} type="submit" loading={isLoading} label="Generate License Key" />
          <Button className={styles.ActionButton} onClick={onSend} label="Send to Client's Email" />
        </div>
      )}
      {!generateMode && (
        <div className={styles.UpdateGroup}>
          <Button className={styles.UpdateButton} type="submit" loading={isLoading} label="Update" />
        </div>
      )}
    </form>
  )
}

export default LicenseDetails
