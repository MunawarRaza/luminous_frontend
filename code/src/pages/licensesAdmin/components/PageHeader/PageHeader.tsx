import Card from '@/components/atoms/Card/Card'
import PageTitle from '@/components/atoms/PageTitle/PageTitle'
import { PageHeaderProps } from './PageHeader.interface'
import styles from './PageHeader.module.css'
import { Text } from '@mantine/core'
import { KeyIcon } from '@heroicons/react/24/outline'

function PageHeader({ generateLicense }: PageHeaderProps) {
  const headerTitle = 'License Management'

  return (
    <div className={styles.PageHeader}>
      <PageTitle title={headerTitle} />
      <Card className={styles.ActionCard} onClick={() => generateLicense()}>
        <div>
          <Text size="lg" className={styles.ActionTitle}>
            Generate License
          </Text>
        </div>
        <KeyIcon className={styles.Icon} />
      </Card>
    </div>
  )
}

export default PageHeader
