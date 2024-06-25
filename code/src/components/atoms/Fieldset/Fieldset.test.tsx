import { screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as FieldsetStories from './Fieldset.stories'
import { render } from '@test/utils'

const { Default } = composeStories(FieldsetStories)

describe('Fieldset Component', () => {
  it('should render component', () => {
    render(<Default />)
    const fieldset = screen.getByTestId('fieldset')
    expect(fieldset).toBeInTheDocument()
  })
})
