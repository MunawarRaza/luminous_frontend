import { screen, waitFor } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as SideNavigationStories from './SideNavigation.stories'
import { render } from '@test/utils'

const { Default, Expanded } = composeStories(SideNavigationStories)

describe('SideNavigation Component', () => {
  it('should render sidebar component navigation collapsed', () => {
    const onToggle = vi.fn()
    render(<Default onToggle={onToggle} />)
    const sidebarNavigation = screen.getByTestId('sidebar-navigation')

    expect(sidebarNavigation).toBeInTheDocument()
  })

  it('should render sidebar component navigation expanded', () => {
    const onToggle = vi.fn()
    render(<Expanded onToggle={onToggle} />)
    const toggleButton = screen.getByTestId('toggle-nav')

    expect(toggleButton).toHaveAttribute('aria-expanded', 'true')
  })

  it("should call onToggle function when click on 'menu' button", async () => {
    const onToggle = vi.fn()
    render(<Default onToggle={onToggle} />)
    const toggleButton = screen.getByTestId('toggle-nav')

    await waitFor(() => {
      toggleButton?.click()
      expect(onToggle).toHaveBeenCalled()
    })
  })
})
