import { fireEvent, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as ToggleThemeStories from './ToggleTheme.stories'
import { render } from '@test/utils'

const { Default } = composeStories(ToggleThemeStories)

describe('ToggleTheme Component', () => {
  it('should render toggle button icon', () => {
    render(<Default />)
    const toggleButton = screen.getByTestId('toggle-theme')

    expect(toggleButton).toBeInTheDocument()
  })

  it('should toggle the theme when button is clicked', () => {
    render(<Default />)
    const toggleButton = screen.getByTestId('toggle-theme')

    expect(screen.getByLabelText(/dark-icon/i)).toBeInTheDocument()
    fireEvent.click(toggleButton)

    expect(screen.getByLabelText(/light-icon/i)).toBeInTheDocument()
  })
})
