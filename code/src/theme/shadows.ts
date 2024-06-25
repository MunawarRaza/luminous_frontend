import { rgba } from '@mantine/core'
import colors from './colors'

export default {
  sm: 'var(--mantine-shadow-themed-sm)',
  md: 'var(--mantine-shadow-themed-md)',
  lg: 'var(--mantine-shadow-themed-lg)',
  'graph-bar-vertical': 'var(--mantine-shadow-themed-graph-bar-vertical)',
  'graph-bar-horizontal': 'var(--mantine-shadow-themed-graph-bar-horizontal)',
  radio: `2px 2px 25px 8px ${rgba('#7CBCC8', 0.9)}`,
  'sm-light': `0px 4px 10px 0px ${rgba(colors.gray[3], 0.3)}`,
  'md-light': `6px 6px 6px 0px ${rgba(colors.black, 0.1)}`,
  'lg-light': `0px 4px 12px 0px ${rgba(colors.black, 0.2)}`,
  'graph-bar-vertical-light': `1px 0px 4px 0px ${rgba(colors.black, 0.25)}`,
  'graph-bar-horizontal-light': `0px 1px 4px 0px ${rgba(colors.black, 0.25)}`,
  'sm-dark': `0px 4px 10px 0px ${rgba(colors.white, 0.3)}`,
  'md-dark': `6px 6px 6px 0px ${rgba(colors.white, 0.25)}`,
  'lg-dark': `0px 4px 12px 0px ${rgba(colors.white, 0.3)}`,
  'graph-bar-vertical-dark': `1px 0px 4px 0px ${rgba(colors.white, 0.3)}`,
  'graph-bar-horizontal-dark': `0px 1px 4px 0px ${rgba(colors.white, 0.3)}`,
  'hover-primary': '0px 1px 1px 0px #0000001F, 0px 0px 0px 1px #000000A3, 0px 2px 5px 0px #676E7614',
  'hover-secondary':
    '0px 1px 1px 0px rgba(0, 0, 0, 0.12), 0px 0px 0px 1px rgba(103, 110, 118, 0.24), 0px 2px 5px 0px rgba(103, 110, 118, 0.08)',
  'hover-error': '0px 1px 1px 0px #0000001F, 0px 0px 0px 2px #F3414166, 0px 2px 5px 0px #F3414114',
  'hover-warning': '0px 1px 1px 0px #0000001F, 0px 0px 0px 2px #E9A23B66, 0px 2px 5px 0px #E9A23B14',
  'hover-success': '0px 1px 1px 0px #0000001F, 0px 0px 0px 2px #53B48366, 0px 2px 5px 0px #53B48314',
  'focus-primary':
    '0px 1px 1px 0px #0000001F, 0px 0px 0px 1px #000000A3, 0px 2px 5px 0px #676E7614, 0px 0px 0px 4px #676E7629',
  'focus-secondary':
    '0px 1px 1px 0px #0000001F, 0px 0px 0px 1px #676E7629, 0px 2px 5px 0px #676E7614, 0px 0px 0px 4px #676E7629',
  'focus-error':
    '0px 1px 1px 0px #0000001F, 0px 0px 0px 1px #F3414129, 0px 2px 5px 0px #676E7614, 0px 0px 0px 4px #F3414129',
  'focus-warning':
    '0px 1px 1px 0px #0000001F, 0px 0px 0px 1px #E9A23B29, 0px 2px 5px 0px #676E7614, 0px 0px 0px 4px #E9A23B29',
  'focus-success':
    '0px 1px 1px 0px #0000001F, 0px 0px 0px 1px #53B48329, 0px 2px 5px 0px #676E7614, 0px 0px 0px 4px #53B48329'
}
