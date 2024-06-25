import { Group } from '@mantine/core'
import FormLegend from '@/components/atoms/FormLegend/FormLegend'
import { UserDetailsProps } from './UserDetails.interface'
import RegularInput from '@/components/atoms/RegularInput/RegularInput'
import PhoneInput from '@/components/atoms/PhoneInput/PhoneInput'
import Select from '@/components/atoms/Select/Select'
import Button from '@/components/atoms/Button/Button'
import styles from './UserDetails.module.css'
import { useForm, zodResolver } from '@mantine/form'
import { USER_ROLES } from '@/enums/userRoles'
import { ACCOUNT_VALUES } from '../../contracts/accountValues'
import { useAppDispatch, useAppSelector } from '@/store/hooks/store-hooks'
import { editUserAccount, createUserAccount } from '@/store/actions/users.actions'
import { UserDetailsSchema } from './UserDetails.validations'

function UserDetails({ user, onCancel, editMode = false, onEdit, createMode = false }: UserDetailsProps) {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector((state) => state.usersLoaders.isUpdatingUser)

  const { onSubmit, values, getInputProps, setFieldValue } = useForm({
    initialValues: {
      first_name: user?.name.split(' ')[0] ?? '',
      last_name: user?.name.split(' ')[1] ?? '',
      phone_number: user?.phone_number ?? '',
      email: user?.email ?? '',
      job_title: user?.job_title ?? '',
      role: user?.role ?? '',
      password: user?.password ?? ''
    },
    validateInputOnBlur: true,
    validate: zodResolver(UserDetailsSchema)
  })

  const handleSubmit = onSubmit(
    async (values) => {
      const uservalues = {
        name: `${values.first_name} ${values.last_name}`,
        ...values
      }
      if (createMode) {
        await dispatch(createUserAccount({ body: uservalues })).unwrap()
      } else {
        await dispatch(editUserAccount({ id: user?.id, body: uservalues })).unwrap()
      }
      onCancel?.()
    },
    async (errors) => {
      if (Object.keys(errors).length === 1 && Object.keys(errors).at(0) === 'password' && !createMode) {
        const uservalues = {
          name: `${values.first_name} ${values.last_name}`,
          phone_number: `${values.phone_number}`,
          email: `${values.email}`,
          job_title: `${values.job_title}`,
          role: `${values.role}`
        }

        await dispatch(editUserAccount({ id: user?.id, body: uservalues })).unwrap()
        onCancel?.()
      }
    }
  )

  const userRoles: Array<{ label: string; value: USER_ROLES }> = [
    { value: USER_ROLES.ORG_ADMIN, label: 'Admin' },
    { value: USER_ROLES.EMPLOYEE, label: 'Employee' }
  ]

  const handlePhoneChange = (value: string) => {
    setFieldValue(ACCOUNT_VALUES.PHONE_NUMBER, value)
  }
  const handleSelectChange = (value: string) => {
    const role = userRoles.find((role) => role.value === value)

    if (role) setFieldValue(ACCOUNT_VALUES.ROLE, role.value)
  }

  return (
    <form className={styles.DetailsForm} onSubmit={handleSubmit}>
      <FormLegend title="Contact info" />
      <Group grow mt="xl">
        <RegularInput label="First name" disabled={!editMode} {...getInputProps(ACCOUNT_VALUES.FIRST_NAME)} />
        <RegularInput label="Last name" disabled={!editMode} {...getInputProps(ACCOUNT_VALUES.LAST_NAME)} />
      </Group>
      <Group grow mt="lg">
        <RegularInput label="Email" type="email" disabled={!editMode} {...getInputProps(ACCOUNT_VALUES.EMAIL)} />
        <PhoneInput
          label="Phone"
          initialValue={values.phone_number}
          disabled={!editMode}
          onValueChange={handlePhoneChange}
          {...getInputProps(ACCOUNT_VALUES.PHONE_NUMBER)}
        />
      </Group>
      {createMode && (
        <Group grow mt="lg">
          <RegularInput
            label="Password"
            type="password"
            disabled={!createMode}
            {...getInputProps(ACCOUNT_VALUES.PASSWORD)}
          />
        </Group>
      )}
      <Group grow mt="lg">
        <RegularInput label="Job title" disabled={!editMode} {...getInputProps(ACCOUNT_VALUES.JOB_TITLE)} />
        <Select
          options={userRoles}
          label="Role"
          disabled={!editMode}
          onOptionSubmit={handleSelectChange}
          {...getInputProps(ACCOUNT_VALUES.ROLE)}
        />
      </Group>
      <div className={styles.ActionGroup}>
        <Button className={styles.ActionButton} onClick={onCancel} outlined label="Cancel" />
        {!editMode && <Button className={styles.ActionButton} onClick={onEdit} label="Edit" />}
        {editMode && <Button className={styles.ActionButton} type="submit" loading={isLoading} label="Save" />}
      </div>
    </form>
  )
}

export default UserDetails
