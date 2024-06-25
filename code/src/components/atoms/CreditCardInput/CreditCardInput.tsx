import { TextInput } from '@mantine/core'
import { CreditCardInputProps } from './CreditCardInput.interfaces'
import styles from './CreditCardInput.module.css'
import { useState } from 'react'
import creditcards from 'creditcards'
import { CreditCardIcon } from '@heroicons/react/24/outline'
import CreditCardImage from '../CreditCardImage/CreditCardImage'

function CreditCardInput({ label, onValueChange, placeholder, error, disabled }: CreditCardInputProps) {
  const [cardType, setCardType] = useState<string | undefined>('')
  const [cardNumber, setCardNumber] = useState('')
  const inputStyles = [styles.RegularInput, error && styles.ErrorInput]

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newCardNumber = event.target.value.replace(/\s+/g, '')
    if (/^\d*$/.test(newCardNumber)) {
      newCardNumber = newCardNumber.replace(/(.{4})/g, '$1 ').trim()
      const detectedCardType = creditcards.card.type(newCardNumber.replace(/\s/g, ''))
      setCardType(detectedCardType?.toLowerCase())
      setCardNumber(newCardNumber)
      onValueChange && onValueChange(newCardNumber)
    }
  }

  return (
    <div className={styles.Wrapper}>
      <CreditCardImage cardType={cardType} />
      <TextInput
        data-testid="credit-card-input"
        classNames={{
          root: styles.InputWrapper,
          input: inputStyles.join(' '),
          error: styles.Error,
          label: styles.Label
        }}
        leftSection={<CreditCardIcon className={styles.InputIcon} />}
        type="text"
        label={label}
        placeholder={placeholder}
        value={cardNumber}
        onChange={handleInputChange}
        maxLength={19}
        error={error}
        disabled={disabled}
      />
    </div>
  )
}

export default CreditCardInput
