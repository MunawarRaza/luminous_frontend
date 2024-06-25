import axios from 'axios'

export default function getErrorMessage(error: unknown) {
  let message = 'Something went wrong'

  if (axios.isAxiosError(error)) {
    if (error.response) {
      message = error.response.data?.message ?? message
    }
  } else if (error instanceof Error) {
    message = error.message
  }

  return message
}
