import { act, fireEvent, screen, waitFor } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as NotificationStories from './Notification.stories'
import { render } from '@test/utils'

const { Default } = composeStories(NotificationStories)

describe('Notification Component', () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
  })

  afterEach(() => {
    vi.runOnlyPendingTimers()
    vi.useRealTimers()
  })

  it('should render notification component when isOpen is true', () => {
    render(<Default isOpen />)
    const notification = screen.getByTestId('notification')

    expect(notification).toBeInTheDocument()
  })

  it('should close notification when clicked on close button', async () => {
    render(<Default message="Test message" isOpen />)
    const closeButton = screen.getByTestId('notification-close-button')

    fireEvent.click(closeButton)

    await waitFor(() => {
      expect(screen.queryByTestId('notification')).not.toBeVisible()
    })
  })

  it('does not render when isOpen is false', () => {
    render(<Default message="Test message" isOpen={false} />)
    expect(screen.queryByText('Test message')).not.toBeVisible()
  })

  it('calls onClose after 5 seconds if isOpen is true', async () => {
    const mockOnClose = vi.fn()
    render(<Default message="Test message" isOpen={true} onClose={mockOnClose} />)

    await act(() => vi.runAllTimers())
    await waitFor(() => {
      expect(mockOnClose).toHaveBeenCalledTimes(1)
    })
  })
})
