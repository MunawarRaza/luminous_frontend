import { screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as StepsProgressStories from './StepsProgress.stories'
import { render } from '@test/utils'

const { Default } = composeStories(StepsProgressStories)

describe('StepsProgress Component', () => {
  it('should render component', () => {
    render(<Default />)
    const stepper = screen.getByTestId('stepper')

    expect(stepper).toBeInTheDocument()
  })
})
