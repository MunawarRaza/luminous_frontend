import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import theme from '@/theme'
import { cssVariableResolver } from '@/theme/cssVariableResolver'
import { ColorSchemes } from '@/enums/colorSchemes'

function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ColorSchemeScript defaultColorScheme={ColorSchemes.LIGHT} />
      <MantineProvider
        theme={theme}
        defaultColorScheme={ColorSchemes.LIGHT}
        cssVariablesResolver={cssVariableResolver}
        withCssVariables
      >
        {children}
      </MantineProvider>
    </>
  )
}

export default ThemeProvider
