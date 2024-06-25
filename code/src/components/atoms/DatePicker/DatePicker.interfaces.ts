type DateValue = Date | null
type DatesRangeValue = [DateValue, DateValue]

export interface DatePickerInterface {
  /** Field description */
  label?: string
  /** Placeholder */
  placeholder?: string
  /** Is this field required? */
  required?: boolean
  /** Changes between Single Date and Range Date modes */
  type?: 'default' | 'range'
  /** Is this component without rounded borders? */
  sharped?: boolean
  /** Function to be called when a (range of) date is selected */
  onChange?: (value: DateValue | DatesRangeValue) => void
  /** Is this component disabled? */
  disabled?: boolean
  /** Error message */
  error?: string
}
