import { CardIconProps } from './CreditCardImage.interfaces'
import styles from './CreditCardImage.module.css'
import { useEffect, useState } from 'react'

function CreditCardImage({ cardType }: CardIconProps) {
  const [cardIcon, setCardIcon] = useState<string | undefined>('')

  useEffect(() => {
    if (cardType) {
      import(`../../../assets/images/cards/${cardType}.svg`)
        .then((image) => {
          setCardIcon(image.default)
        })
        .catch((error) => {
          console.error(error)
        })
    } else {
      setCardIcon(undefined)
    }
  }, [cardType])

  return cardIcon && <img data-testid="credit-card-image" className={styles.CardImage} src={cardIcon} alt={cardType} />
}

export default CreditCardImage
