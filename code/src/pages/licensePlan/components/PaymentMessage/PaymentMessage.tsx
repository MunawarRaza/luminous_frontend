import Button from '@/components/atoms/Button/Button'
import { Text, Title } from '@mantine/core'
import styles from './PaymentMessage.module.css'
import { PaymentMessageProps } from './PaymentMessage.interface'

function PaymentMessage({ onClose }: PaymentMessageProps) {
  return (
    <div className={styles.MessageWrapper}>
      <Title order={2}>Your Payment is being Processed</Title>
      <Text fw={700}>
        You shall receive an email confirmation once your payment has been approved by your credit card company
      </Text>
      <Button label="Finish" fullWidth onClick={onClose} />
    </div>
  )
}

export default PaymentMessage
