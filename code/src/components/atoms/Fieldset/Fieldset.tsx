import { Fieldset as MantineFieldset } from '@mantine/core'
import styles from './Fieldset.module.css'

function Fieldset({ ...props }: typeof MantineFieldset.defaultProps) {
  return (
    <MantineFieldset
      data-testid="fieldset"
      {...props}
      classNames={{
        ...props.classNames,
        root: styles.Fieldset,
        legend: styles.Legend
      }}
    />
  )
}

export default Fieldset
