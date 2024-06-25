import { z } from 'zod'

export const OrganizationDetailsSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  organization_name: z.string().min(1, 'Organization is required'),
  phone: z
    .string()
    .regex(/^\(\d{3}\) \d{3}-\d{4}$/, 'Invalid phone number')
    .min(1, 'Phone number is required'),
  address: z.string().min(1, 'Job title is required')
})
