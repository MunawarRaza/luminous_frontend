export interface IPlanPaymentStepsProps {
  currentStep: number
  onNextStep: () => void
  onPreviousStep: () => void
  onCancel?: () => void
}
