import { screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as BadgeStories from './Badge.stories'
import { render } from '@test/utils'

const { Default } = composeStories(BadgeStories)

describe('Badge Component', () => {
  it('should render component', () => {
    render(<Default />)
    const badge = screen.getByTestId('badge')

    expect(badge).toBeInTheDocument()
  })
})
