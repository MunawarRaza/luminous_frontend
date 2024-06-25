import { fireEvent, screen } from '@testing-library/react'
import { render } from '@test/utils'
import * as AlertMessageStories from './AlertMessage.stories'
import { composeStories } from '@storybook/react'
import AlertMessage from './AlertMessage'

const { Default } = composeStories(AlertMessageStories)

describe('AlertMessage Component', () => {
  it('should render', () => {
    render(<Default />)
    const alert = screen.getByTestId('alert-message')

    expect(alert).toBeInTheDocument()
  })

  it('should calls onClose', () => {
    const onClose = vi.fn()
    render(
      <AlertMessage show onClose={onClose}>
        Alert
      </AlertMessage>
    )
    const dismiss = screen.getByLabelText('Dismiss')

    fireEvent.click(dismiss)
    expect(onClose).toHaveBeenCalledOnce()
  })
})
