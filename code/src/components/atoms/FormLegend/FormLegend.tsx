import { FormLegendProps } from './FormLegend.interfaces'
import styles from './FormLegend.module.css'

function FormLegend({ title, className = '' }: FormLegendProps) {
  return (
    <div className={`${styles.LegendWrapper} ${className}`} data-testid="form-legend">
      <legend className={styles.Legend}>{title}</legend>
      <div className={styles.LegendLine} />
    </div>
  )
}

export default FormLegend
