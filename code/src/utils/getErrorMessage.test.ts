import getErrorMessage from './getErrorMessage'

describe('getErrorMessage', () => {
  it('Should return error message', () => {
    const error = new Error('Error message')
    const resultMessage = getErrorMessage(error)

    expect(resultMessage).toEqual('Error message')
  })

  it('Should return error message when is Axios error', () => {
    const error = {
      isAxiosError: true,
      response: {
        data: {
          message: 'Error message'
        }
      }
    }
    const resultMessage = getErrorMessage(error)

    expect(resultMessage).toEqual('Error message')
  })
})
