import { screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as SpinnerStories from './Spinner.stories'
import { render } from '@test/utils'

const { Default } = composeStories(SpinnerStories)

describe('Spinner Component', () => {
  it('should render component', () => {
    render(<Default />)

    const spinner = screen.getByTestId('spinner')

    expect(spinner).toBeInTheDocument()
  })
})
