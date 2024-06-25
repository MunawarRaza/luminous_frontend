/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_URL } from '@/constants/API_URL'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { axiosWithInterceptors } from './axiosInterceptos'

export const TIMEOUT = 8000

/**
 * Create Axios instance with default configuration
 */
const instance = axios.create({
  baseURL: API_URL,
  timeout: TIMEOUT,
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
})

/**
 * Create Axios instance with interceptors
 */
export const axiosInstance: AxiosInstance = axiosWithInterceptors(instance)

/**
 * Create Axios request methods
 */

export const requests = {
  get: async (url: string, params?: AxiosRequestConfig) => axiosInstance.get(url, { params }),
  post: async (url: string, data: any, params?: AxiosRequestConfig) => axiosInstance.post(url, data, { params }),
  put: async (url: string, data: any, params?: AxiosRequestConfig) => axiosInstance.put(url, data, { params }),
  patch: async (url: string, data: any, params?: AxiosRequestConfig) => axiosInstance.patch(url, data, { params }),
  delete: async (url: string, params?: AxiosRequestConfig) => axiosInstance.delete(url, { params })
}
