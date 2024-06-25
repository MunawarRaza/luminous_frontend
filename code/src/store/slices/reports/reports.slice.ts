import { createSlice } from '@reduxjs/toolkit'
import { IReportState } from './reports.interfaces'

const initialState: IReportState = {
  report: null,
  isUploading: false,
  isValidating: false
}

const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {
    setReport: (state, action) => {
      state.report = action.payload
    },
    removeReport: (state) => {
      state.report = null
    },
    setUploading: (state, action) => {
      state.isUploading = action.payload
    },
    setValidating: (state, action) => {
      state.isValidating = action.payload
    }
  }
})

export const { setReport, removeReport, setUploading, setValidating } = reportsSlice.actions

export default reportsSlice.reducer
