import StepsProgress from '@/components/atoms/StepsProgress/StepsProgress'
import PlanPreview from '../PlanPreview/PlanPreview'
import { IPlanPaymentStepsProps } from './PlanPaymentSteps.interfaces'
import { PAYMENT_STEPS } from '../../constants/PAYMENT_STEPS'
import styles from './PlanPaymentSteps.module.css'
import { useAppSelector } from '@/store/hooks/store-hooks'
import PaymentOptions from '../PaymentOptions/PaymentOptions'
import PaymentMessage from '../PaymentMessage/PaymentMessage'
import { PaymentOptionsValues } from '../PaymentOptions/PaymentOptions.interfaces'

function PlanPaymentSteps({ currentStep = 0, onNextStep, onPreviousStep, onCancel }: IPlanPaymentStepsProps) {
  const subscription = useAppSelector((state) => state.subscription)

  const handleConfirmPayment = (values: PaymentOptionsValues) => {
    console.log(values)
    onNextStep()
  }

  return (
    <div className={styles.Wrapper}>
      <StepsProgress steps={PAYMENT_STEPS} currentStep={currentStep === 2 ? 3 : currentStep} />
      <div className={styles.FormWrapper}>
        {currentStep === 0 && <PlanPreview subscription={subscription} onCancel={onCancel} onContinue={onNextStep} />}
        {currentStep === 1 && (
          <PaymentOptions subscription={subscription} onCancel={onPreviousStep} onConfirm={handleConfirmPayment} />
        )}
        {currentStep === 2 && <PaymentMessage onClose={onCancel} />}
      </div>
    </div>
  )
}

export default PlanPaymentSteps
