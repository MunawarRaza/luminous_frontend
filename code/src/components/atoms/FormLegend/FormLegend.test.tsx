import { screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as FormLegendStories from './FormLegend.stories'
import { render } from '@test/utils'

const { Default } = composeStories(FormLegendStories)

describe('FormLegend Component', () => {
  it('should render component', () => {
    render(<Default />)
    const formLegend = screen.getByTestId('form-legend')
    expect(formLegend).toBeInTheDocument()
  })
})
