module.exports = {
  plugins: {
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xxs': '30rem',
        'mantine-breakpoint-xs': '37.5rem',
        'mantine-breakpoint-sm': '52.5rem',
        'mantine-breakpoint-md': '60rem',
        'mantine-breakpoint-lg': '80rem',
        'mantine-breakpoint-xl': '90rem',
        'mantine-breakpoint-xxl': '100rem',
        'mantine-grid-columns-sm': 4,
        'mantine-grid-columns-md': 8,
        'mantine-grid-columns-lg': 12
      }
    }
  }
}
