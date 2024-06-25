import { DatePickerInput } from '@mantine/dates'
import { CalendarIcon } from '@heroicons/react/24/solid'
import { DatePickerInterface } from './DatePicker.interfaces'
import MonthLabel from './MonthLabel'
import * as constants from './constants'
import classes from './DatePicker.module.css'

/** Datepicker single or range */
const DatePicker = ({ type = 'default', error = '', sharped = false, onChange, ...props }: DatePickerInterface) => {
  const svgClass = error ? classes.svgError : undefined
  const rightIcon = <CalendarIcon width={16} height={16} className={`${classes.SvgIcon} ${svgClass}`} />

  const numberOfColumns = type === 'range' ? 2 : 1

  return (
    <DatePickerInput
      data-testid="date-picker-input"
      {...props}
      onChange={onChange}
      type={type}
      error={error}
      numberOfColumns={numberOfColumns}
      rightSection={rightIcon}
      valueFormat={constants.DATE_VALUE_FORMAT}
      labelSeparator={constants.ARROW_RIGHT}
      monthLabelFormat={MonthLabel}
      firstDayOfWeek={constants.MONDAY}
      classNames={{
        input: classes.input,
        label: classes.label,
        wrapper: classes.calendarWrapper,
        calendarHeader: classes.calendarHeader,
        calendarHeaderLevel: classes.calendarHeaderLevel,
        calendarHeaderControl: classes.calendarHeaderControl,
        calendarHeaderControlIcon: classes.calendarHeaderControlIcon,
        day: classes.day,
        required: classes.required,
        section: classes.section,
        weekday: classes.weekday
      }}
      popoverProps={{
        position: 'bottom-end',
        classNames: {
          dropdown: classes.calendarWrapper
        }
      }}
    />
  )
}

export default DatePicker
