import { Title, useMantineColorScheme } from '@mantine/core'
import { PageTitleProps } from './PageTitle.interfaces'
import styles from './PageTitle.module.css'
import { ColorSchemes } from '@/enums/colorSchemes'

function PageTitle({ title }: PageTitleProps) {
  const { colorScheme } = useMantineColorScheme()

  return (
    <Title
      data-testid="page-title"
      order={1}
      aria-label={`page-title-${colorScheme}`}
      className={`${styles.Title} ${colorScheme === ColorSchemes.DARK ? styles.DarkTitle : ''}`}
    >
      {title}
    </Title>
  )
}

export default PageTitle
