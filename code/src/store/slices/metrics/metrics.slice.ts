import { createSlice } from '@reduxjs/toolkit'
import { MetricsState } from './metrics.interfaces'
import {
  getAuditsData,
  getChatData,
  getErrorsData,
  getQuestionsData,
  getTemplatesData,
  getUsageData
} from '@/store/actions/dashboard.actions'

const initialState: MetricsState = {
  usage: [],
  audits: [],
  templates: [],
  errors: [],
  questions: [],
  mostFrequent: {
    error: '',
    question: ''
  },
  error: null
}

const metricsSlice = createSlice({
  name: 'metrics',
  initialState,
  reducers: {
    setMetricsError: (state, action) => {
      state.error = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsageData.fulfilled, (state, action) => {
        state.usage = action.payload
      })
      .addCase(getAuditsData.fulfilled, (state, action) => {
        state.audits = action.payload
      })
      .addCase(getTemplatesData.fulfilled, (state, action) => {
        state.templates = action.payload
      })
      .addCase(getChatData.fulfilled, (state, action) => {
        state.mostFrequent = action.payload
      })
      .addCase(getQuestionsData.fulfilled, (state, action) => {
        state.questions = action.payload
      })
      .addCase(getErrorsData.fulfilled, (state, action) => {
        state.errors = action.payload
      })
  }
})

export const { setMetricsError } = metricsSlice.actions

export default metricsSlice.reducer
