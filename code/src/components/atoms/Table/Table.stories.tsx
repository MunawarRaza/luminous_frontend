import { StoryObj } from '@storybook/react'
import Table from './Table'

export default {
  title: 'Table',
  component: Table
}

type Story = StoryObj<typeof Table>

export const Default: Story = {
  name: 'Table',
  args: {
    columns: [
      { title: 'Column 1', key: '1' },
      { title: 'Column 2', key: '2' },
      { title: 'Column 3', key: '3' }
    ],
    rows: [
      {
        key: '1',
        values: ['Row 1, Column 1', 'Row 1, Column 2', 'Row 1, Column 3']
      },
      {
        key: '2',
        values: ['Row 2, Column 1', 'Row 2, Column 2', 'Row 2, Column 3']
      },
      {
        key: '3',
        values: ['Row 3, Column 1', 'Row 3, Column 2', 'Row 3, Column 3']
      }
    ]
  }
}

export const WithPagination: Story = {
  name: 'Table with pagination',
  args: {
    ...Default.args,
    hasPagination: true,
    itemsPerPage: 3,
    rows: [
      {
        key: '1',
        values: ['Row 1, Column 1', 'Row 1, Column 2', 'Row 1, Column 3']
      },
      {
        key: '2',
        values: ['Row 2, Column 1', 'Row 2, Column 2', 'Row 2, Column 3']
      },
      {
        key: '3',
        values: ['Row 3, Column 1', 'Row 3, Column 2', 'Row 3, Column 3']
      },
      {
        key: '4',
        values: ['Row 3, Column 1', 'Row 3, Column 2', 'Row 3, Column 3']
      },
      {
        key: '5',
        values: ['Row 3, Column 1', 'Row 3, Column 2', 'Row 3, Column 3']
      }
    ]
  }
}
