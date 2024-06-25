import { fireEvent, screen } from '@testing-library/react'
import { render } from '@test/utils'
import { composeStories } from '@storybook/react'
import DatePicker from './DatePicker'
import * as DatePickerStories from './DatePicker.stories'

const { SingleDate } = composeStories(DatePickerStories)

describe('DatePicker Component', () => {
  describe('SingleDate DatePicker Component', () => {
    it('Should render SingleDate component', () => {
      render(<SingleDate />)
      const input = screen.getByTestId('date-picker-input')
      expect(input).toBeInTheDocument()
    })

    it('Should pick a date and call onChange Function', () => {
      const onChange = vi.fn()
      render(<DatePicker label="Date Picker" placeholder="Select date" onChange={onChange} sharped />)
      const input = screen.getByTestId('date-picker-input')
      fireEvent.click(input)
      const date = screen.getByRole('button', { name: /10/i })
      fireEvent.click(date)

      const today = new Date()
      const oracle = new Date(today.getFullYear(), today.getMonth(), 10)

      expect(onChange).toHaveBeenCalledOnce()
      expect(onChange).toHaveBeenCalledWith(oracle)
    })

    it('Should show error message when there is error', () => {
      render(<DatePicker error="Error Message" />)
      const errorMessage = screen.getByText(/error message/i)
      expect(errorMessage).toBeInTheDocument()
    })

    it('Should not show error message when there is not error', () => {
      render(<DatePicker />)
      const errorMessage = screen.queryByText(/error message/i)
      expect(errorMessage).not.toBeInTheDocument()
    })
  })

  describe('RangeDate DatePicker Component', () => {
    it('Should pick a range of dates and call onChange Function', () => {
      const onChange = vi.fn()
      render(<DatePicker type="range" label="Date Picker" placeholder="Start date → End date" onChange={onChange} />)
      const input = screen.getByTestId('date-picker-input')
      fireEvent.click(input)

      const startDate = screen.getAllByRole('button', { name: /10/i })[0]
      fireEvent.click(startDate)

      const endDate = screen.getAllByRole('button', { name: /16/i })[0]
      fireEvent.click(endDate)

      const today = new Date()
      const oracle = [
        new Date(today.getFullYear(), today.getMonth(), 10),
        new Date(today.getFullYear(), today.getMonth(), 16)
      ]

      expect(onChange).toHaveBeenCalledTimes(2)
      expect(onChange).toHaveBeenCalledWith(oracle)
    })

    it('Should not show error message when there is not error', () => {
      render(<DatePicker />)
      const errorMessage = screen.queryByText(/error message/i)
      expect(errorMessage).not.toBeInTheDocument()
    })
  })
})
