import { Group } from '@mantine/core'
import FormLegend from '@/components/atoms/FormLegend/FormLegend'
import { OrganizationDetailsProps } from './OrganizationDetails.interface'
import RegularInput from '@/components/atoms/RegularInput/RegularInput'
import PhoneInput from '@/components/atoms/PhoneInput/PhoneInput'
import Button from '@/components/atoms/Button/Button'
import styles from './OrganizationDetails.module.css'
import { useForm, zodResolver } from '@mantine/form'
import { ORGANIZATION_VALUES } from '../../contracts/organizationValues'
import { useAppDispatch, useAppSelector } from '@/store/hooks/store-hooks'
import { editOrganization } from '@/store/actions/organizations.actions'
import { OrganizationDetailsSchema } from './OrganizationDetails.validations'

function OrganizationDetails({ onCancel, editMode = false, onEdit }: OrganizationDetailsProps) {
  const dispatch = useAppDispatch()
  const isLoadingEdit = useAppSelector((state) => state.organizationsLoaders.isUpdatingOrganization)
  const organization = useAppSelector((state) => state.organizations.organization)

  const { onSubmit, values, getInputProps, setFieldValue } = useForm({
    initialValues: {
      organization_name: organization?.organization_name ?? '',
      phone: organization?.phone ?? '',
      email: organization?.email ?? '',
      address: organization?.address ?? ''
    },
    validateInputOnBlur: true,
    validate: zodResolver(OrganizationDetailsSchema)
  })

  const handleSubmit = onSubmit(
    async (values) => {
      await dispatch(editOrganization({ id: organization?.id, body: values })).unwrap()
      onCancel?.()
    },
    async (errors) => {
      console.log(errors)
    }
  )

  const handlePhoneChange = (value: string) => {
    setFieldValue(ORGANIZATION_VALUES.PHONE, value)
  }

  return (
    <form className={styles.DetailsForm} onSubmit={handleSubmit}>
      <FormLegend title="Company Info" />
      <Group grow mt="xl">
        <RegularInput
          label="Company Name"
          disabled={!editMode}
          {...getInputProps(ORGANIZATION_VALUES.ORGANIZATION_NAME)}
        />
        {/* <RegularInput
          label="Administrator Name"
          disabled={!editMode}
          {...getInputProps(ORGANIZATION_VALUES.ADMINISTRATOR_NAME)}
        /> */}
      </Group>
      <Group grow mt="lg">
        <RegularInput label="Email" type="email" disabled={!editMode} {...getInputProps(ORGANIZATION_VALUES.EMAIL)} />
        <PhoneInput
          label="Phone"
          initialValue={values.phone}
          disabled={!editMode}
          onValueChange={handlePhoneChange}
          {...getInputProps(ORGANIZATION_VALUES.PHONE)}
        />
      </Group>
      <Group grow mt="lg">
        <RegularInput label="Address" disabled={!editMode} {...getInputProps(ORGANIZATION_VALUES.ADDRESS)} />
      </Group>
      <div className={styles.ActionGroup}>
        <Button className={styles.ActionButton} onClick={onCancel} outlined label="Cancel" />
        {!editMode && <Button className={styles.ActionButton} onClick={onEdit} label="Edit" />}
        {editMode && <Button className={styles.ActionButton} type="submit" loading={isLoadingEdit} label="Save" />}
      </div>
    </form>
  )
}

export default OrganizationDetails
