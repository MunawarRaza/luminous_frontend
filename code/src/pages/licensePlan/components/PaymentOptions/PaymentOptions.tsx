import Fieldset from '@/components/atoms/Fieldset/Fieldset'
import FormLegend from '@/components/atoms/FormLegend/FormLegend'
import { Space, Text } from '@mantine/core'
import NewCreditCard from '../NewCreditCard/NewCreditCard'
import { useState } from 'react'
import { PAYMENT_OPTIONS, PAYMENT_OPTIONS_VALUES } from './paymentOptions.enums'
import styles from './PaymentOptions.module.css'
import Button from '@/components/atoms/Button/Button'
import { PaymentOptionsProps, PaymentOptionsValues } from './PaymentOptions.interfaces'
import Checkbox from '@/components/atoms/Checkbox/Checkbox'
import { useForm } from '@mantine/form'
import CardsList from '../CardsList/CardsList'
import { CreditCardContract } from '@/contracts/CreditCard.contract'

function PaymentOptions({ subscription, onCancel, onConfirm }: PaymentOptionsProps) {
  const [selectedCard, setSelectedCard] = useState<CreditCardContract | null>(null)
  const form = useForm<PaymentOptionsValues>({
    initialValues: {
      paymentMethod: null,
      cardAddressLine1: '',
      cardCity: '',
      cardCountry: '',
      cardExpiryMonth: '',
      cardExpiryYear: '',
      cardName: '',
      cardNumber: '',
      cardPostalCode: '',
      cardCvc: ''
    }
  })

  const getDisableStyle = (option: PAYMENT_OPTIONS) => {
    return form.values.paymentMethod !== option ? styles.OptionWrapperDisabled : ''
  }

  const handleSubmit = form.onSubmit((values) => {
    onConfirm(values)
  })

  const handleSelectCard = (card: CreditCardContract) => {
    form.setFieldValue(PAYMENT_OPTIONS_VALUES.PAYMENT_METHOD, PAYMENT_OPTIONS.SAVED_CARD)
    setSelectedCard(card)
  }

  const handleNewCard = () => {
    form.setFieldValue(PAYMENT_OPTIONS_VALUES.PAYMENT_METHOD, PAYMENT_OPTIONS.NEW_CARD)
    setSelectedCard(null)
  }

  return (
    <div className={styles.Wrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.PaymentsWrapper}>
          <div className={styles.PriceDescription}>
            <FormLegend title="Product cost" />
            <Text className={styles.Price}>
              <span>$</span>
              {subscription?.price}
              <span>/month</span>
            </Text>
          </div>
          <Space h="xl" />
          <Fieldset legend="Your saved cards">
            <Checkbox
              className={styles.OptionCheckbox}
              checked={form.values.paymentMethod === PAYMENT_OPTIONS.SAVED_CARD}
            />
            <CardsList onSelectCard={handleSelectCard} selectedCard={selectedCard} />
          </Fieldset>
          <Space h="md" />

          <Fieldset legend="New Credit Card">
            <div
              role="button"
              onClick={form.values.paymentMethod === PAYMENT_OPTIONS.NEW_CARD ? undefined : handleNewCard}
              className={`${styles.OptionWrapper} ${getDisableStyle(PAYMENT_OPTIONS.NEW_CARD)}`}
            >
              <Checkbox
                className={styles.OptionCheckbox}
                checked={form.values.paymentMethod === PAYMENT_OPTIONS.NEW_CARD}
              />
              <NewCreditCard enabled={form.values.paymentMethod === PAYMENT_OPTIONS.NEW_CARD} form={form} />
            </div>
          </Fieldset>
        </div>

        <div className={styles.ActionWrapper}>
          <Button label="Review order" type="button" outlined fullWidth size="md" onClick={onCancel} />
          <Button
            label="Proceed"
            type="submit"
            fullWidth
            size="md"
            onClick={() => console.log('proceed')}
            disabled={!form.values.paymentMethod}
          />
        </div>
      </form>
    </div>
  )
}

export default PaymentOptions
