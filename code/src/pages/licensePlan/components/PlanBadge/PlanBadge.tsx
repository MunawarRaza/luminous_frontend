import { PlanBadgeProps } from './PlanBadge.interfaces'
import styles from './PlanBadge.module.css'

function PlanBadge({ planType, className = '' }: PlanBadgeProps) {
  const badgeClasses = [styles.Badge, styles[`Badge-${planType}`], className].join(' ')

  return <div className={badgeClasses}>{planType}</div>
}

export default PlanBadge
