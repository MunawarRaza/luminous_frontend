import { screen, waitFor } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as SelectStories from './Select.stories'
import { render } from '@test/utils'

const { Default } = composeStories(SelectStories)

describe('Select Component', () => {
  it('should render select component', () => {
    render(<Default />)

    const select = screen.getByTestId('select')

    expect(select).toBeInTheDocument()
  })

  it("should render select options array with 'Admin' and 'User' values", () => {
    const options = [
      { label: 'Admin', value: 'admin' },
      { label: 'User', value: 'user' }
    ]

    render(<Default options={options} />)

    const select = screen.getByTestId('select')
    expect(select).toBeInTheDocument()

    const adminOption = screen.getByText(/Admin/i)
    expect(adminOption).toBeInTheDocument()

    const userOption = screen.getByText(/User/i)
    expect(userOption).toBeInTheDocument()
  })

  it('Should expand the options when the select is clicked', async () => {
    const options = [
      { label: 'Admin', value: 'admin' },
      { label: 'User', value: 'user' }
    ]

    render(<Default options={options} />)

    const select = screen.getByTestId('select')

    expect(select).toBeInTheDocument()

    select.click()

    await waitFor(() => {
      expect(select).toHaveAttribute('data-expanded', 'true')
    })
  })

  it('Should call onSelect function when an option is selected', async () => {
    const options = [
      { label: 'Admin', value: 'admin' },
      { label: 'User', value: 'user' }
    ]

    const onSelect = vi.fn()

    render(<Default options={options} onSelect={onSelect} />)

    const select = screen.getByTestId('select')

    expect(select).toBeInTheDocument()

    select.click()

    await waitFor(() => {
      expect(select).toHaveAttribute('data-expanded', 'true')
    })

    const adminOption = screen.getByText(/Admin/i)
    expect(adminOption).toBeInTheDocument()

    adminOption.click()

    await waitFor(() => {
      expect(onSelect).toHaveBeenCalledTimes(1)
      expect(onSelect).toHaveBeenCalledWith('admin')
    })
  })
})
