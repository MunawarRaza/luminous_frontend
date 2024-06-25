import { z } from 'zod'
import { RegisterSchema } from './RegisterForm.validations'

interface IRegisterFormProps {
  onCancel?: () => void
  message?: string
  onSubmit?: (values: RegisterFormValues) => void
  isLoading?: boolean
}

export type RegisterFormValues = z.infer<typeof RegisterSchema>
export type RegisterFormProps = IRegisterFormProps
