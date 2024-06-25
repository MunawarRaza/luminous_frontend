import { Text } from '@mantine/core'
import styles from './ContractInfo.module.css'
import { ContractInfoProps } from './ContractInfo.interfaces'

function ContractInfo({ title, value }: ContractInfoProps) {
  return (
    <div className={styles.Wrapper}>
      <Text fw={700} mb="sm">
        {title}
      </Text>
      <Text className={styles.Info}>{value}</Text>
    </div>
  )
}

export default ContractInfo
