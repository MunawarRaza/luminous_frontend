import { NotificationState } from './notification.interfaces'
import notificationSliceReducer, { clearNotification, setNotification } from './notification.slice'

const intialState: NotificationState = {
  variant: 'success',
  message: '',
  show: false
}

describe('notificationSlice', () => {
  it('Should render the initial state', () => {
    expect(notificationSliceReducer(undefined, { type: undefined })).toEqual(intialState)
  })

  it('should set notification', () => {
    const reducer = notificationSliceReducer(intialState, setNotification({ variant: 'success', message: 'test' }))

    expect(reducer).toEqual({
      ...intialState,
      variant: 'success',
      message: 'test',
      show: true
    })
  })

  it('should clear notification', () => {
    const reducer = notificationSliceReducer(intialState, clearNotification())

    expect(reducer).toEqual({
      ...intialState
    })
  })
})
