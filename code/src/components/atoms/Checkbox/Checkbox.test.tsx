import { screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as CheckboxStories from './Checkbox.stories'
import { render } from '@test/utils'

const { Default } = composeStories(CheckboxStories)

describe('Checkbox Component', () => {
  it('should render component', () => {
    render(<Default />)
    const checkbox = screen.getByTestId('checkbox')
    expect(checkbox).toBeInTheDocument()
  })

  it('should handle the onChange function', () => {
    const onChange = vi.fn()
    render(<Default onChange={onChange} />)
    const checkbox = screen.getByTestId('checkbox')

    checkbox.click()
    expect(onChange).toHaveBeenCalled()
  })
})
