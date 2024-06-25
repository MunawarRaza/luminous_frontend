import { screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as MenuItemStories from './MenuItem.stories'
import { render } from '@test/utils'

const { Default } = composeStories(MenuItemStories)

describe('MenuItem Component', () => {
  it('should render link component', () => {
    render(<Default />)

    const navLink = screen.getByTestId('menu-item')

    expect(navLink).toBeInTheDocument()
  })

  it('should render link component with icon', () => {
    render(<Default />)

    const navLink = screen.getByTestId('menu-item')
    const navLinkIcon = navLink.querySelector('svg')

    expect(navLinkIcon).toBeInTheDocument()
  })
})
