import { createTheme } from '@mantine/core'
import fonts from './fonts'
import fontSizes from './fontSizes'
import lineHeights from './lineHeights'
import spacing from './spacing'
import shadows from './shadows'
import breakpoints from './breakpoints'
import colors from './colors'
import radius from './radius'
import other from './other'

const theme = createTheme({
  fontFamily: fonts.body,
  fontSizes,
  headings: {
    fontFamily: fonts.headings,
    fontWeight: '700',
    sizes: {
      h1: {
        fontSize: fontSizes['5xl'],
        lineHeight: lineHeights.md
      },
      h2: {
        fontSize: fontSizes['3xl'],
        lineHeight: lineHeights.md
      },
      h3: {
        fontSize: fontSizes['2xl'],
        lineHeight: lineHeights.md
      },
      h4: {
        fontSize: fontSizes.xl,
        lineHeight: lineHeights.lg
      }
    }
  },
  colors: {
    primary: colors.primary,
    secondary: colors.secondary,
    gray: colors.gray,
    error: colors.red,
    success: colors.green,
    warning: colors.yellow,
    red: colors.red,
    green: colors.green,
    yellow: colors.yellow
  },
  lineHeights,
  primaryColor: 'primary',
  primaryShade: { light: 5, dark: 5 },
  white: colors.white,
  black: colors.black,
  spacing,
  radius,
  shadows,
  breakpoints,
  other
})

export default theme
