import { composeStories } from '@storybook/react'
import * as LogoStories from './Logo.stories'
import { render } from '@test/utils'
import { screen } from '@testing-library/react'
import { MantineProvider } from '@mantine/core'
import LogoLight from '@/assets/images/logo.svg'
import LogoDark from '@/assets/images/logo-dark.svg'

const { Default } = composeStories(LogoStories)

describe('Logo Component', () => {
  it('should render logo component', () => {
    render(<Default />)
    const imgElement = screen.getByTestId('logo')

    expect(imgElement).toBeInTheDocument()
  })

  it('renders LogoDark when colorScheme is dark', () => {
    render(
      <MantineProvider defaultColorScheme="dark">
        <Default />
      </MantineProvider>
    )

    const imgElement = screen.getByTestId('logo')
    expect(imgElement).toHaveAttribute('src', LogoDark)
  })

  it('renders LogoLight when colorScheme is light', () => {
    render(
      <MantineProvider defaultColorScheme="light">
        <Default />
      </MantineProvider>
    )

    const imgElement = screen.getByTestId('logo')
    expect(imgElement).toHaveAttribute('src', LogoLight)
  })
})
