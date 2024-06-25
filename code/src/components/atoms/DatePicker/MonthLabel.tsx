import dayjs from 'dayjs'
import { ChevronUpDownIcon } from '@heroicons/react/24/outline'
import { MONTH_LABEL_FORMAT } from './constants'

const MonthLabel = (month: Date) => {
  const formattedMonth = dayjs(month).format(MONTH_LABEL_FORMAT)
  return (
    <>
      <span style={{ marginRight: '10px' }}>{formattedMonth}</span>
      <ChevronUpDownIcon height={16} width={16} />
    </>
  )
}

export default MonthLabel
