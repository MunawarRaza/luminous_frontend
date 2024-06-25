import { z } from 'zod'
import { ResetPasswordFormSchema } from '@/components/organisms/ResetPassword/ResetPasswordFormSchema.ts'

interface IResetPasswordProps {
  onCancel?: () => void
  message?: string
  onSubmit: (values: ResetPasswordFormValues) => void
  isLoading?: boolean
}

export type ResetPasswordProps = IResetPasswordProps

export type ResetPasswordFormValues = z.infer<typeof ResetPasswordFormSchema>
