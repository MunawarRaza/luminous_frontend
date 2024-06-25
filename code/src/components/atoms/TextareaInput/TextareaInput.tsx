import { Textarea } from '@mantine/core'
import { TextareaInputProps } from './TextareaInput.interface'
import { useState } from 'react'
import styles from './TextareaInput.module.css'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'

function TextareaInput({
  label,
  helperText,
  error = '',
  onChange,
  disabled,
  rightSection = null,
  ...props
}: TextareaInputProps) {
  const [value, setValue] = useState('')
  const inputStyles = [styles.textareaInput, error && styles.errorTextarea]

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (disabled) return

    const { value } = event.target
    setValue(value)
    onChange && onChange(value)
  }

  return (
    <Textarea
      data-testid="textarea-input"
      classNames={{
        input: inputStyles.join(' '),
        error: styles.error,
        label: styles.label,
        section: styles.sectionIcon
      }}
      radius="md"
      onChange={handleChange}
      value={value}
      label={label}
      description={helperText}
      error={error}
      rightSection={!value && !rightSection ? <QuestionMarkCircleIcon className={styles.questionIcon} /> : rightSection}
      rightSectionWidth={40}
      minRows={8}
      disabled={disabled}
      inputWrapperOrder={['label', 'input', 'description', 'error']}
      {...props}
    />
  )
}

export default TextareaInput
