import { z } from 'zod'

export interface CancelSubscriptionFormValues {
  reason: string
}

export const CancelSubscriptionSchema = z.object({
  reason: z.string().min(10, "Reason can't be empty").max(500, "Reason can't be longer than 500 characters")
})

export interface CancelSubscriptionModalProps {
  onClose?: () => void
}
