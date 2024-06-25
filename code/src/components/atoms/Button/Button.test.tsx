import { fireEvent, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as ButtonStories from './Button.stories'
import Button from './Button'
import { render } from '@test/utils'

const { Default } = composeStories(ButtonStories)

describe('Button', () => {
  test('it should render a Button component', () => {
    render(<Default />)
    const ButtonElement = screen.getByTestId('button')
    fireEvent.click(ButtonElement)
    expect(ButtonElement).toBeInTheDocument()
  })

  test('it should calls correct function onClick', () => {
    const onClick = vi.fn()
    render(<Button label="Button" onClick={onClick} />)
    const ButtonElement = screen.getByTestId('button')
    fireEvent.click(ButtonElement)

    expect(onClick).toHaveBeenCalledOnce()
  })
})
