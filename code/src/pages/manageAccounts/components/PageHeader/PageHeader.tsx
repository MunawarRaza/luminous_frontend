import Card from '@/components/atoms/Card/Card'
import PageTitle from '@/components/atoms/PageTitle/PageTitle'
import { PageHeaderProps } from './PageHeader.interface'
import { UserPlusIcon } from '@heroicons/react/24/solid'
import styles from './PageHeader.module.css'
import { Text } from '@mantine/core'

function PageHeader({ organization, setIsCreating, setIsOrganization }: PageHeaderProps) {
  const headerTitle = `${organization?.organization_name}'s Accounts`

  return (
    <div className={styles.PageHeader}>
      <div onClick={() => setIsOrganization(true)}>
        <PageTitle title={headerTitle} />
      </div>
      <Card className={styles.ActionCard} onClick={() => setIsCreating(true)}>
        <div>
          <Text size="lg" className={styles.ActionTitle}>
            Create an account
          </Text>
          <Text size="lg" className={styles.ActionDescrption}>
            New Employee? Create their secure account
          </Text>
        </div>
        <UserPlusIcon className={styles.Icon} />
      </Card>
    </div>
  )
}

export default PageHeader
