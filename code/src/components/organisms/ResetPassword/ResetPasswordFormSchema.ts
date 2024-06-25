import { z } from 'zod'

export const ResetPasswordFormSchema = z
  .object({
    username: z.string().min(1, 'Email is required').email('Invalid email address'),
    password: z.string().min(1, 'Password is required'),
    confirmPassword: z.string().min(1, 'Confirmation Password is required'),
    code: z.string().min(1, 'Code is required')
  })
  .refine(({ confirmPassword, password }) => confirmPassword === password, {
    message: "Password don't match",
    path: ['confirm_password']
  })
