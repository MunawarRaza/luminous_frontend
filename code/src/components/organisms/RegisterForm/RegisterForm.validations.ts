import { z } from 'zod'

export const RegisterSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  name: z.string().min(1, 'Name is required'),
  phoneNumber: z
    .string()
    .regex(/^\(\d{3}\) \d{3}-\d{4}$/, 'Invalid phone number')
    .min(1, 'Phone number is required'),

  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'
    )
    .min(8, 'Password must be at least 8 characters long'),
  companyName: z.string().min(1, 'Company name is required'),
  companyAddress: z.string().min(4, 'Company address is required'),
  companyPhoneNumber: z
    .string()
    .min(1, 'Company phone number is required')
    .refine((value) => /^\(\d{3}\) \d{3}-\d{4}$/.test(value), 'Invalid phone number'),
  companyEmail: z.string().min(1, 'Company email is required').email('Invalid email address'),
  jobTitle: z.string().min(1, 'Job title is required')
})
