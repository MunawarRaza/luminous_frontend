import { fireEvent, screen, waitFor } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as FileUploadStories from './FileUploadForm.stories'
import { render } from '@test/utils'

const { Default } = composeStories(FileUploadStories)

describe('FileUpload Component', () => {
  beforeEach(() => {
    global.URL.createObjectURL = vi.fn(() => 'mock-object-url')
  })

  it('should render component', () => {
    render(<Default />)

    const uploadForm = screen.getByTestId('upload-file-form')
    expect(uploadForm).toBeInTheDocument()
  })

  it('should render FileInput when no file is selected', () => {
    render(<Default />)

    const fileInput = screen.getByTestId('file-input')
    expect(fileInput).toBeInTheDocument()
  })

  it('should render FilePreview and buttons when a file is selected', () => {
    render(<Default />)

    const fileInput = screen.getByTestId('file-input')
    const mockFile = new File(['content'], 'example.pdf', { type: 'application/pdf' })

    Object.defineProperty(fileInput, 'files', {
      value: [mockFile]
    })

    fireEvent.change(fileInput)

    const filePreview = screen.getByTestId('file-preview')
    const changeButton = screen.getByTestId('change-file-button')
    const verifyButton = screen.getByTestId('verify-file-button')

    expect(filePreview).toBeInTheDocument()
    expect(changeButton).toBeInTheDocument()
    expect(verifyButton).toBeInTheDocument()
  })

  it('should clear the selected file when the Change button is clicked and show the input again', async () => {
    render(<Default />)

    const fileInput = screen.getByTestId('file-input')
    const mockFile = new File(['content'], 'example.pdf', { type: 'application/pdf' })

    Object.defineProperty(fileInput, 'files', {
      value: [mockFile]
    })

    fireEvent.change(fileInput)

    const changeButton = screen.getByTestId('change-file-button')
    fireEvent.click(changeButton)

    await waitFor(() => {
      const fileInput = screen.getByTestId('file-input')
      expect(fileInput).toBeInTheDocument()
    })
  })
})
