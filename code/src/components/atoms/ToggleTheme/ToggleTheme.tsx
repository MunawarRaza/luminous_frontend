import { useComputedColorScheme, useMantineColorScheme } from '@mantine/core'
import { ColorSchemes } from '@/enums/colorSchemes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import styles from './ToggleTheme.module.css'

function ToggleTheme() {
  const { colorScheme, setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme(ColorSchemes.LIGHT, { getInitialValueInEffect: true })

  const toggleColorScheme = () =>
    setColorScheme(computedColorScheme === ColorSchemes.DARK ? ColorSchemes.LIGHT : ColorSchemes.DARK)

  return (
    <button data-testid="toggle-theme" onClick={toggleColorScheme} className={styles.ToggleButton}>
      {colorScheme === ColorSchemes.DARK ? (
        <SunIcon aria-label="light-icon" className={styles.ToggleIcon} />
      ) : (
        <MoonIcon aria-label="dark-icon" className={styles.ToggleIcon} />
      )}
    </button>
  )
}

export default ToggleTheme
