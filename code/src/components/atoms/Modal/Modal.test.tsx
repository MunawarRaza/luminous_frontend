import { screen, waitFor } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as ModalStories from './Modal.stories'
import { render } from '@test/utils'

const { Default } = composeStories(ModalStories)

describe('Modal Component', () => {
  it('should render Modal component', () => {
    render(<Default />)
    const modal = screen.getByTestId('modal')

    expect(modal).toBeInTheDocument()
  })

  it('should close modal when click on the overlay', async () => {
    render(<Default />)
    const modal = screen.getByTestId('modal')
    expect(modal).toBeInTheDocument()

    const modalOverlay = screen.getByLabelText(/Modal overlay/i)
    modalOverlay.click()
    screen.debug()

    await waitFor(() => {
      const modalInner = modal.querySelector('.mantine-modal-inner')
      expect(modalInner).not.toBeInTheDocument()
    })
  })

  it('should close modal when click on the close button', async () => {
    render(<Default />)
    const modal = screen.getByTestId('modal')
    const modalCloseButton = screen.getByLabelText(/Close modal/i)

    expect(modal).toBeInTheDocument()

    modalCloseButton.click()

    await waitFor(() => {
      const modalInner = modal.querySelector('.mantine-modal-inner')
      expect(modalInner).not.toBeInTheDocument()
    })
  })

  it('should handle onClose function when the modal is closed and is passed as prop', async () => {
    const onClose = vi.fn()
    render(<Default onClose={onClose} />)
    const modal = screen.getByTestId('modal')
    const modalOverlay = screen.getByLabelText(/Modal overlay/i)

    expect(modal).toBeInTheDocument()

    modalOverlay.click()

    await waitFor(() => {
      expect(onClose).toHaveBeenCalledTimes(1)
    })
  })
})
