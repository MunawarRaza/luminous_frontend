import { ISubscription } from '@/contracts/subscriptions'

export interface IPlanPreviewProps {
  subscription: ISubscription | null
  onCancel?: () => void
  onContinue?: () => void
}
