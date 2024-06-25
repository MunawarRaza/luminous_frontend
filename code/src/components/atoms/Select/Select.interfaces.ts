import { SelectProps as MantineSelectProps } from '@mantine/core'

export interface ISelectProps {
  label?: string
  placeholder?: string
  onSelect?: (value: string) => void
  options: MantineSelectProps['data']
}

export type SelectProps = ISelectProps & MantineSelectProps
