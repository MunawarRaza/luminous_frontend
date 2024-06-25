import PageTitle from '@/components/atoms/PageTitle/PageTitle'
import { PageHeaderProps } from './PageHeader.interfaces'
import styles from './PageHeader.module.css'
import Card from '@/components/atoms/Card/Card'
import { Text } from '@mantine/core'
import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'

function PageHeader({ onAdd, title }: PageHeaderProps) {
  return (
    <div className={styles.PageHeader}>
      <PageTitle title={title} />
      <Card onClick={onAdd} className={styles.ActionCard}>
        <div>
          <Text className={styles.ActionTitle}>Upload new Report</Text>
          <Text className={styles.ActionDescrption}>Finished your report? verifiy and correct it</Text>
        </div>
        <ClipboardDocumentCheckIcon className={styles.Icon} />
      </Card>
    </div>
  )
}

export default PageHeader
