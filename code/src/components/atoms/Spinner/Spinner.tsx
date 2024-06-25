import { SpinnerProps } from './Spinner.interfaces'
import styles from './Spinner.module.css'
import SpinnerImg from '@/assets/images/icons/spinner.svg'

function Spinner({ width }: SpinnerProps) {
  return (
    <div className={styles.Spinner} style={{ width, height: width }} data-testid="spinner">
      <img src={SpinnerImg} alt="Luminous spinner" />
    </div>
  )
}

export default Spinner
