import { fireEvent, screen } from '@testing-library/react'
import { render } from '@test/utils'
import { composeStories } from '@storybook/react'
import * as ToggleStories from './Toggle.stories'

const { DefaultToggle, DisabledToggle } = composeStories(ToggleStories)

describe('Toggle button', () => {
  test('should renders correctly and be checked when clicked', () => {
    render(<DefaultToggle />)

    const toggle = screen.getByTestId('toggle')
    expect(toggle).toBeInTheDocument()
    fireEvent.click(toggle)
    expect(toggle).toBeChecked()
  })

  test('should stay unchecked when is disabled when clicked', () => {
    render(<DisabledToggle />)

    const toggle = screen.getByTestId('toggle')

    fireEvent.click(toggle)
    expect(toggle).not.toBeChecked()
  })
})
