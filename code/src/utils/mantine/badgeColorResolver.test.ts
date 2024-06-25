import { DEFAULT_THEME } from '@mantine/core'
import variantColorResolver from './badgeColorResolver'

describe('badgeColorResolver', () => {
  it('should return correct color response with danger variant', () => {
    const input = {
      color: 'red',
      theme: DEFAULT_THEME,
      variant: 'danger'
    }

    const result = {
      background: 'var(--mantine-color-red-9)',
      hover: 'var(--mantine-color-red-8)',
      color: 'var(--mantine-color-white)',
      border: 'none'
    }

    const variantColorResult = variantColorResolver(input)

    expect(variantColorResult).toEqual(result)
  })

  it('should return correct color response with filled variant', () => {
    const input = {
      color: 'lime',
      theme: DEFAULT_THEME,
      variant: 'filled'
    }

    const result = {
      background: 'var(--mantine-color-lime-filled)',
      hover: 'var(--mantine-color-lime-filled-hover)',
      color: 'var(--mantine-color-black)',
      border: 'calc(0.0625rem * var(--mantine-scale)) solid transparent',
      hoverColor: 'var(--mantine-color-black)'
    }

    const variantColorResult = variantColorResolver(input)

    expect(variantColorResult).toEqual(result)
  })
})
