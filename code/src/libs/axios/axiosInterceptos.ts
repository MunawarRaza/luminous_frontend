import { Store } from '@reduxjs/toolkit'
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios'

let store: Store

export const injectStore = (_store: Store) => {
  store = _store
}

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders
}

export function axiosWithInterceptors(axiosInstance: AxiosInstance) {
  // Add a request interceptor
  axiosInstance.interceptors.request.use(
    function (config): AdaptAxiosRequestConfig {
      // Do something before request is sent
      const accessToken = store.getState().auth.token
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
      }

      return config
    },
    async function (error) {
      // Do something with request error
      return Promise.reject(error)
    }
  )

  // Add a response interceptor
  axiosInstance.interceptors.response.use(
    function (response): AxiosResponse {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response
    },
    async function (error: AxiosError | Error) {
      if (axios.isAxiosError(error)) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message)
        }
      }
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error)
    }
  )

  return axiosInstance
}
