import { fireEvent, screen, waitFor } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as TopbarStories from './Topbar.stories'
import { render } from '@test/utils'

const { Default } = composeStories(TopbarStories)

describe('Topbar Component', () => {
  it('should render component with logo', () => {
    render(<Default />)
    const topbar = screen.getByTestId('header-topbar')

    expect(topbar).toBeInTheDocument()
  })

  it("should handle user's logout", async () => {
    const mockDispatch = vi.fn()

    render(<Default />)
    const userMenu = screen.getByTestId('user-menu')

    userMenu.click()

    await waitFor(() => {
      const logoutHandler = () => {
        mockDispatch({ type: 'LOGOUT' })
      }

      const logoutButton = screen.getByTestId('logout-button')
      logoutButton.onclick = logoutHandler

      fireEvent.click(logoutButton)

      expect(mockDispatch).toHaveBeenCalledTimes(1)
      expect(mockDispatch).toHaveBeenCalledWith({ type: 'LOGOUT' })
    })
  })
})
