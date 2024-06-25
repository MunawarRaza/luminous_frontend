import { fireEvent, screen, waitFor } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as TableStories from './Table.stories'
import { render } from '@test/utils'

const { Default, WithPagination } = composeStories(TableStories)

describe('Table Component', () => {
  it('should render component', () => {
    render(<Default />)
    const table = screen.getByTestId('table')

    expect(table).toBeInTheDocument()
  })

  it('renders pagination when enabled', () => {
    render(<WithPagination />)
    const tablePagination = screen.getByTestId('table-pagination')

    expect(tablePagination).toBeInTheDocument()
  })

  it('renders the correct data slice based on the page passed', async () => {
    const mockData = [...Array(50).keys()].map((i) => ({ key: (i + 1).toString(), values: [`Item ${i}`] }))

    const itemsPerPage = 10
    render(<WithPagination rows={mockData} itemsPerPage={itemsPerPage} />)

    // Check if first page items are rendered
    for (let i = 0; i < itemsPerPage; i++) {
      expect(screen.getByText(`Item ${i}`)).toBeInTheDocument()
    }

    // Change to second page
    await waitFor(() => fireEvent.click(screen.getByText('2')))

    // Check if second page items are rendered
    for (let i = itemsPerPage; i < 2 * itemsPerPage; i++) {
      expect(screen.getByText(`Item ${i}`)).toBeInTheDocument()
    }
  })
})
