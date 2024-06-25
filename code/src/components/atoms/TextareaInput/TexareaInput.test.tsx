import { composeStories } from '@storybook/react'
import * as TextareaInputStories from './TextareaInput.stories'
import { render } from '@test/utils'
import { fireEvent, screen } from '@testing-library/react'

const { DefaultTextarea, DisabledTextarea } = composeStories(TextareaInputStories)

describe('Textarea Input', () => {
  it('should render correctly and change its value when typed into', () => {
    render(<DefaultTextarea placeholder="Test textarea" />)
    const textarea = screen.getByTestId('textarea-input')

    expect(textarea).toBeInTheDocument()
    fireEvent.change(textarea, { target: { value: 'test' } })
    expect(textarea).toHaveValue('test')
  })

  it("should not allow to change value when it's disabled", () => {
    render(<DisabledTextarea placeholder="Test textarea" />)
    const textarea = screen.getByTestId('textarea-input')

    fireEvent.change(textarea, { target: { value: 'test' } })
    expect(textarea).toHaveValue('')
  })

  it('should renders error message', () => {
    render(<DefaultTextarea placeholder="Test textarea" error="Error message" />)
    const error = screen.getByText(/error message/i)
    expect(error).toBeInTheDocument()
  })

  it('should renders helper text', () => {
    render(<DefaultTextarea placeholder="Test textarea" helperText="Helper text" />)
    const helperText = screen.getByText(/helper text/i)
    expect(helperText).toBeInTheDocument()
  })

  it('should not render error when is not provided', () => {
    render(<DefaultTextarea placeholder="Test textarea" />)
    const error = screen.queryByText(/error message/i)
    expect(error).not.toBeInTheDocument()
  })
})
