import { z } from 'zod'

export const LoginSchema = z.object({
  username: z.string().email('Invalid email address'),
  password: z.string().min(1, "Password can't be empty")
})

export type FormValues = z.infer<typeof LoginSchema>

interface ILoginFormProps {
  onSubmit: (values: FormValues) => void
  onForgotPassword: (values: FormValues) => void
  message?: string
  isLoading?: boolean
  authMessage?: string
}

export type LoginFormProps = ILoginFormProps
