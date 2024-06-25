import { LogoProps } from './Logo.interfaces'
import LogoLight from '@/assets/images/logo.svg'
import LogoDark from '@/assets/images/logo-dark.svg'
import { useMantineColorScheme } from '@mantine/core'
import { ColorSchemes } from '@/enums/colorSchemes'
import styles from './Logo.module.css'

function Logo({ className = '', alt = 'Codexa', width = '100%', height = '48px' }: LogoProps) {
  const { colorScheme } = useMantineColorScheme()
  const logoStyles = [styles.logo, className].join(' ')
  const LogoImage = colorScheme === ColorSchemes.DARK ? LogoDark : LogoLight

  return <img data-testid="logo" src={LogoImage} className={logoStyles} alt={alt} width={width} height={height} />
}

export default Logo
