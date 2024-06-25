import { z } from 'zod'

export const UserDetailsSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  first_name: z.string().min(1, 'Name is required'),
  last_name: z.string().min(1, 'Name is required'),
  phone_number: z
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
  job_title: z.string().min(1, 'Job title is required'),
  role: z.string().min(1, 'Role is required')
})
