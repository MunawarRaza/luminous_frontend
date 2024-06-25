import { Text } from '@mantine/core'
import styles from './NewCreditCard.module.css'
import CreditCardInput from '@/components/atoms/CreditCardInput/CreditCardInput'
import RegularInput from '@/components/atoms/RegularInput/RegularInput'
import { NewCreditCardProps } from './NewCreditCard.interfaces'
import FormLegend from '@/components/atoms/FormLegend/FormLegend'
import Checkbox from '@/components/atoms/Checkbox/Checkbox'
import { PAYMENT_OPTIONS_VALUES } from '../PaymentOptions/paymentOptions.enums'

function NewCreditCard({ enabled = false, form }: NewCreditCardProps) {
  return (
    <>
      <div className={styles.InputsWrapper}>
        <div>
          <Text fw={700} tt="capitalize">
            Card Number
          </Text>
          <Text>16-digit car number on your card</Text>
        </div>
        <CreditCardInput
          placeholder="XXXX-XXXX-XXXX-XXXX"
          disabled={!enabled}
          onValueChange={(value) => form.setFieldValue(PAYMENT_OPTIONS_VALUES.CARD_NUMBER, value)}
        />
      </div>
      <div className={styles.InputsWrapper}>
        <div>
          <Text fw={700} tt="capitalize">
            Card Owner
          </Text>
          <Text>Enter the name on the card</Text>
        </div>
        <RegularInput
          placeholder="Owner Name"
          disabled={!enabled}
          className={styles.FluidInput}
          {...form.getInputProps(PAYMENT_OPTIONS_VALUES.CARD_NAME)}
        />
      </div>

      <div className={styles.InputsWrapper}>
        <div className={styles.InlineWrapper}>
          <div>
            <Text fw={700} tt="capitalize">
              Expiry Date
            </Text>
            <Text>Enter the card’s expiration date</Text>
          </div>
          <RegularInput
            placeholder="MM"
            disabled={!enabled}
            className={styles.DigitsInput}
            maxLength={2}
            {...form.getInputProps(PAYMENT_OPTIONS_VALUES.CARD_EXPIRY_MONTH)}
          />
          <RegularInput
            placeholder="YY"
            disabled={!enabled}
            className={styles.DigitsInput}
            maxLength={2}
            {...form.getInputProps(PAYMENT_OPTIONS_VALUES.CARD_EXPIRY_YEAR)}
          />
        </div>

        <div className={styles.InlineWrapper}>
          <div>
            <Text fw={700} tt="capitalize">
              CVV
            </Text>
            <Text>3-digit security code on the back</Text>
          </div>
          <RegularInput
            placeholder="XXX"
            disabled={!enabled}
            className={styles.CVVInput}
            {...form.getInputProps(PAYMENT_OPTIONS_VALUES.CARD_CVC)}
            maxLength={3}
          />
        </div>
      </div>

      <FormLegend className={styles.SubLegend} title="Billing Address" />

      <div className={styles.InputsWrapper}>
        <div>
          <Text fw={700} tt="capitalize">
            Street Address
          </Text>
          <Text>Street Name + Address</Text>
        </div>
        <RegularInput
          placeholder="Street Address"
          disabled={!enabled}
          className={styles.FluidInput}
          {...form.getInputProps(PAYMENT_OPTIONS_VALUES.CARD_ADDRESS_LINE1)}
        />
      </div>

      <div className={styles.InputsWrapper}>
        <div className={styles.InlineWrapper}>
          <Text fw={700} tt="capitalize">
            Postal code
          </Text>
          <RegularInput disabled={!enabled} {...form.getInputProps(PAYMENT_OPTIONS_VALUES.CARD_POSTAL_CODE)} />
        </div>
        <div className={styles.InlineWrapper}>
          <Text fw={700} tt="capitalize">
            City
          </Text>
          <RegularInput disabled={!enabled} {...form.getInputProps(PAYMENT_OPTIONS_VALUES.CARD_CITY)} />
        </div>
        <div className={styles.InlineWrapper}>
          <Text fw={700} tt="capitalize">
            Country
          </Text>
          <RegularInput disabled={!enabled} {...form.getInputProps(PAYMENT_OPTIONS_VALUES.CARD_COUNTRY)} />
        </div>
      </div>

      <Checkbox label="Register this card's information for later use" disabled={!enabled} />
    </>
  )
}

export default NewCreditCard
