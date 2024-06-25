import MetrisAPI from '@/services/metrics/metrics.api'
import { createAsyncAction } from '../utils/createAsyncAction'
import getErrorMessage from '@/utils/getErrorMessage'
import { ChartResponseData } from '@/services/metrics/metrics.interfaces'
import { setNotification } from '../slices/notification/notification.slice'

export const getUsageData = createAsyncAction<ChartResponseData, undefined>(
  'dashboard/getUsageData',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await MetrisAPI.getUsage()
      return response.data
    } catch (error) {
      const message = getErrorMessage(error) ?? 'Error fetching usage data'
      dispatch(setNotification({ message, variant: 'error' }))

      return rejectWithValue(message)
    }
  }
)

export const getAuditsData = createAsyncAction<ChartResponseData, undefined>(
  'dashboard/getAuditsData',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await MetrisAPI.getAudits()
      return response.data
    } catch (error) {
      const message = getErrorMessage(error) ?? 'Error fetching audits data'
      dispatch(setNotification({ message, variant: 'error' }))

      return rejectWithValue(message)
    }
  }
)

export const getTemplatesData = createAsyncAction<ChartResponseData, undefined>(
  'dashboard/getTemplatesData',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await MetrisAPI.getTemplates()
      return response.data
    } catch (error) {
      const message = getErrorMessage(error) ?? 'Error fetching templates data'
      dispatch(setNotification({ message, variant: 'error' }))
      return rejectWithValue(message)
    }
  }
)

export const getChatData = createAsyncAction<{ question: string; error: string }, undefined>(
  'dashboard/getChatData',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await MetrisAPI.getChat()
      return {
        question: response.data.data.chat,
        error: response.data.data.error
      }
    } catch (error) {
      const message = getErrorMessage(error) ?? 'Error fetching most frequent data'
      dispatch(setNotification({ message, variant: 'error' }))

      return rejectWithValue(message)
    }
  }
)

export const getQuestionsData = createAsyncAction<ChartResponseData, undefined>(
  'dashboard/getQuestionsData',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await MetrisAPI.getQuestions()
      return response.data
    } catch (error) {
      const message = getErrorMessage(error) ?? 'Error fetching questions data'
      dispatch(setNotification({ message, variant: 'error' }))

      return rejectWithValue(message)
    }
  }
)

export const getErrorsData = createAsyncAction<ChartResponseData, undefined>(
  'dashboard/getErrorsData',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await MetrisAPI.getErrors()
      return response.data
    } catch (error) {
      const message = getErrorMessage(error) ?? 'Error fetching errors data'
      dispatch(setNotification({ message, variant: 'error' }))
      return rejectWithValue(message)
    }
  }
)
