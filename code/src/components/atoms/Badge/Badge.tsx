import { BadgeProps } from './Badge.interfaces'
import { Badge as MantineBadge, MantineProvider, Text } from '@mantine/core'
import styles from './Badge.module.css'
import variantColorResolver from '@/utils/mantine/badgeColorResolver'

function Badge({ children, color }: BadgeProps) {
  console.log(color)

  return (
    <MantineProvider theme={{ variantColorResolver }}>
      <MantineBadge color={color} variant="outline" classNames={{ root: styles.Badge }} data-testid="badge">
        <Text size="sm" className={styles.Text}>
          {children}
        </Text>
      </MantineBadge>
    </MantineProvider>
  )
}

export default Badge
