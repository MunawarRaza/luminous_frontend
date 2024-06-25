import { screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as CardStories from './Card.stories'
import { render } from '@test/utils'

const { DefaultCard } = composeStories(CardStories)

describe('Card', () => {
  test('it should render a Card component', () => {
    render(<DefaultCard />)
    const cardElement = screen.getByTestId('card')

    expect(cardElement).toBeInTheDocument()
  })
})
