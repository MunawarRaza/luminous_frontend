import { screen, waitFor } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as UserMenuStories from './UserMenu.stories'
import { render } from '@test/utils'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import UserMenu from './UserMenu'
import { NAV_LINKS } from '@/enums/navLinks'

const { Default } = composeStories(UserMenuStories)

const user = {
  name: 'John Doe',
  email: 'thelea12@gmail.com',
  avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
}

describe('UserMenu Component', () => {
  it('should render component', () => {
    render(<Default user={user} />)
    const menu = screen.getByTestId('user-menu')

    expect(menu).toBeInTheDocument()
  })

  it("should render component with 'Manage Accounts' menu item when menu is clicked", async () => {
    render(<Default user={user} />)

    const menu = screen.getByTestId('user-menu')
    menu.click()

    await waitFor(() => expect(screen.getByText('Manage Accounts')).toBeInTheDocument())
    expect(menu).toHaveAttribute('aria-expanded', 'true')
  })

  it("Should handle the logout function when 'Logout' menu item is clicked", async () => {
    const logout = vi.fn()
    render(<Default user={user} logout={logout} />)

    const button = screen.getByRole('button')
    button.click()

    await waitFor(() => expect(screen.getByText('Logout')).toBeInTheDocument())

    const logoutButton = screen.getByText('Logout')
    logoutButton.click()

    expect(logout).toHaveBeenCalled()
  })

  it("should change route to '/manage-accounts' when 'Manage Account' menu item is clicked", async () => {
    const logout = vi.fn()

    const router = createMemoryRouter([
      {
        path: '/',
        element: <UserMenu logout={logout} user={user} />
      },
      {
        path: '/manage-accounts',
        element: <div>Manage Accounts page</div>
      }
    ])

    render(<RouterProvider router={router} />)

    const menu = screen.getByTestId('user-menu')
    menu.click()

    await waitFor(() => expect(screen.getByText('Manage Accounts')).toBeInTheDocument())

    const manageAccountsButton = screen.getByRole('menuitem', { name: 'Manage Accounts' })
    manageAccountsButton.click()

    await waitFor(() => expect(screen.getByText('Manage Accounts page')).toBeInTheDocument())
  })

  it("should change route to '/license-plan' when 'Manage Account' menu item is clicked", async () => {
    const logout = vi.fn()

    const router = createMemoryRouter([
      {
        path: '/',
        element: <UserMenu logout={logout} user={user} />
      },
      {
        path: NAV_LINKS.LICENSE_PLAN,
        element: <div>License plan page</div>
      }
    ])

    render(<RouterProvider router={router} />)

    const menu = screen.getByTestId('user-menu')
    menu.click()

    await waitFor(() => expect(screen.getByTestId('license-menu')).toBeInTheDocument())

    const licensePlanMenuItem = screen.getByTestId('license-menu')
    licensePlanMenuItem.click()

    await waitFor(() => expect(screen.getByText('License plan page')).toBeInTheDocument())
  })

  it("should change route to '/license-management' when 'Manage Account' menu item is clicked", async () => {
    const logout = vi.fn()

    const router = createMemoryRouter([
      {
        path: '/',
        element: <UserMenu logout={logout} user={user} />
      },
      {
        path: NAV_LINKS.LICENSE_MANAGEMENT,
        element: <div>License management</div>
      }
    ])

    render(<RouterProvider router={router} />)

    const menu = screen.getByTestId('user-menu')
    menu.click()

    await waitFor(() => expect(screen.getByTestId('license-management-menu')).toBeInTheDocument())

    const licensePlanMenuItem = screen.getByTestId('license-management-menu')
    licensePlanMenuItem.click()

    await waitFor(() => expect(screen.getByText('License management')).toBeInTheDocument())
  })

  it("should change route to '/license-admin' when 'Manage Account' menu item is clicked", async () => {
    const logout = vi.fn()

    const router = createMemoryRouter([
      {
        path: '/',
        element: <UserMenu logout={logout} user={user} />
      },
      {
        path: NAV_LINKS.LICENSES_ADMINISTRATION,
        element: <div>Licenses administration</div>
      }
    ])

    render(<RouterProvider router={router} />)

    const menu = screen.getByTestId('user-menu')
    menu.click()

    await waitFor(() => expect(screen.getByTestId('license-admin-menu')).toBeInTheDocument())

    const licensePlanMenuItem = screen.getByTestId('license-admin-menu')
    licensePlanMenuItem.click()

    await waitFor(() => expect(screen.getByText('Licenses administration')).toBeInTheDocument())
  })
})
