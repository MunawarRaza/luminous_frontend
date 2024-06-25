import { fireEvent, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as FileInputStories from './FileInput.stories'
import { render } from '@test/utils'

const { Default } = composeStories(FileInputStories)

describe('FileInput Component', () => {
  it('should render component', () => {
    render(<Default />)

    const fileInput = screen.getByTestId('file-input')
    expect(fileInput).toBeInTheDocument()
  })

  it('should call onChange when file input changes', () => {
    const handleChange = vi.fn()
    render(<Default onChange={handleChange} />)

    const fileInput = screen.getByTestId('file-input')
    const mockFile = new File(['content'], 'example.pdf', { type: 'application/pdf' })

    Object.defineProperty(fileInput, 'files', {
      value: [mockFile]
    })

    fileInput && fireEvent.change(fileInput)

    expect(handleChange).toHaveBeenCalled()
  })

  it('should accept multiple files when isMultiple is true', () => {
    render(<Default isMultiple />)

    screen.debug()

    const fileInput = document.querySelector('input[type="file"][accept=".pdf"]')
    expect(fileInput).toHaveAttribute('multiple')
  })
})
