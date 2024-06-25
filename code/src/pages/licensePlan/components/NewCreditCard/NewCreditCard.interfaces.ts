import { UseFormReturnType } from '@mantine/form'
import { PaymentOptionsValues } from '../PaymentOptions/PaymentOptions.interfaces'

export interface NewCreditCardProps {
  enabled: boolean
  form: UseFormReturnType<PaymentOptionsValues>
}
