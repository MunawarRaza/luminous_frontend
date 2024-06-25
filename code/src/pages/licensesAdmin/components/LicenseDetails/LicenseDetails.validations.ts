import { z } from 'zod'

export const LicenseDetailsSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  organization_name: z.string().min(1, 'Name is required')
})
