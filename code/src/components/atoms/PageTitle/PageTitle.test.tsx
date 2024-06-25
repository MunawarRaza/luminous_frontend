import { screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as PageTitleStories from './PageTitle.stories'
import { render } from '@test/utils'
import { MantineProvider } from '@mantine/core'

const { Default } = composeStories(PageTitleStories)

describe('PageTitle Component', () => {
  it('should render component', () => {
    render(<Default />)
    const pageTitle = screen.getByTestId('page-title')

    expect(pageTitle).toBeInTheDocument()
  })

  it('Should render page title in dark mode when dark mode is the standard', () => {
    render(
      <MantineProvider defaultColorScheme="dark">
        <Default />
      </MantineProvider>
    )

    const pageTitle = screen.getByTestId('page-title')

    expect(pageTitle).toHaveAttribute('aria-label', 'page-title-dark')
  })
})
