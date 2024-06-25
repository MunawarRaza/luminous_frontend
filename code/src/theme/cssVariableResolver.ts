import { CSSVariablesResolver } from '@mantine/core'

export const cssVariableResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    '--mantine-border-none': theme.other.borders.none,
    '--mantine-border-hairline': theme.other.borders.hairline,
    '--mantine-border-thin': theme.other.borders.thin,
    '--mantine-border-thick': theme.other.borders.thick
  },
  light: {
    '--mantine-color-placeholder': theme.colors.gray[3],
    '--mantine-shadow-themed-sm': theme.shadows['sm-light'],
    '--mantine-shadow-themed-md': theme.shadows['md-light'],
    '--mantine-shadow-themed-lg': theme.shadows['lg-light'],
    '--mantine-shadow-themed-graph-bar-vertical': theme.shadows['graph-bar-vertical-light'],
    '--mantine-shadow-themed-graph-bar-horizontal': theme.shadows['graph-bar-horizontal-light']
  },
  dark: {
    '--mantine-color-placeholder': theme.colors.gray[3],
    '--mantine-shadow-themed-sm': theme.shadows['sm-dark'],
    '--mantine-shadow-themed-md': theme.shadows['md-dark'],
    '--mantine-shadow-themed-lg': theme.shadows['lg-dark'],
    '--mantine-shadow-themed-graph-bar-vertical': theme.shadows['graph-bar-vertical-dark'],
    '--mantine-shadow-themed-graph-bar-horizontal': theme.shadows['graph-bar-horizontal-dark']
  }
})
